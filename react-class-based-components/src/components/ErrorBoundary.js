import { Component } from "react";

// wrapper component
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //error is passed automatically by react
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
