import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fade-up' | 'scale-in' | 'fade';

export function useScrollAnimation<T extends HTMLElement>(
  animationType: AnimationType = 'fade-up',
  options?: {
    stagger?: number;
    delay?: number;
    duration?: number;
    childSelector?: string;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile && animationType === 'scale-in') {
      // On mobile, just fade in
      gsap.set(element, { opacity: 0 });
      gsap.to(element, {
        opacity: 1,
        duration: options?.duration || 0.6,
        delay: options?.delay || 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      return;
    }

    let targets: Element[] = [element];
    if (options?.childSelector) {
      targets = Array.from(element.querySelectorAll(options.childSelector));
    }

    const toVars: gsap.TweenVars = {
      duration: options?.duration || 0.8,
      delay: options?.delay || 0,
      ease: animationType === 'scale-in' ? 'power3.out' : 'power3.out',
      stagger: options?.stagger || 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    };

    switch (animationType) {
      case 'fade-up':
        gsap.set(targets, { opacity: 0, y: 40 });
        toVars.opacity = 1;
        toVars.y = 0;
        break;
      case 'scale-in':
        gsap.set(targets, { opacity: 0, scale: 1.08 });
        toVars.opacity = 1;
        toVars.scale = 1;
        break;
      case 'fade':
        gsap.set(targets, { opacity: 0 });
        toVars.opacity = 1;
        toVars.duration = options?.duration || 0.6;
        toVars.ease = 'power2.out';
        break;
    }

    const ctx = gsap.context(() => {
      gsap.to(targets, toVars);
    }, element);

    return () => {
      ctx.revert();
    };
  }, [animationType, options?.stagger, options?.delay, options?.duration, options?.childSelector]);

  return ref;
}

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const image = container.querySelector('img');
    if (!image) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
}
