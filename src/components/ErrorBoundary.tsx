import { Component, type ReactNode } from 'react';
import { Coffee, RefreshCcw, Home } from 'lucide-react';
import { Link } from 'react-router';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('❌ ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-12 h-12 text-coffee-700" />
            </div>
            <h2 className="text-2xl font-serif text-coffee-900 mb-3">
              ¡Ups! Se derramó el café
            </h2>
            <p className="text-coffee-500 mb-8 leading-relaxed">
              Algo salió mal en nuestra cocina digital. No te preocupes, nuestro barista virtual ya está limpiando el desastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-coffee-700 text-white rounded-lg hover:bg-coffee-900 transition-colors duration-300"
              >
                <RefreshCcw className="w-4 h-4" />
                Recargar página
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg hover:bg-coffee-100 transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                Volver al inicio
              </Link>
            </div>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-coffee-500 cursor-pointer hover:text-coffee-700 transition-colors">
                  Ver detalles técnicos
                </summary>
                <pre className="mt-2 p-3 bg-coffee-100 rounded-lg text-xs text-coffee-700 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}