import React from 'react';
import PropTypes from 'prop-types';

class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 max-w-lg w-full text-center">
            <h3 className="text-xl text-red-400 mb-4">
              {this.state.error?.message || 'Something went wrong'}
            </h3>
            <p className="text-gray-400 mb-6">
              {this.props.errorMessage || 'An error occurred while loading this component.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ComponentErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string
};

export default ComponentErrorBoundary; 