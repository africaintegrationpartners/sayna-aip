import React from "react";

class ErrorBoundary extends React.Component {
  state: { hasError: boolean };

  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }
  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log("Ooops! An error occured", { error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return (this.props as React.PropsWithChildren).children;
  }
}

export default ErrorBoundary;
