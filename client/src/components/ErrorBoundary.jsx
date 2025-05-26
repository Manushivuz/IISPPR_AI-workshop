import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  // Handle case where error might be null
  if (!error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-xl max-w-lg w-full text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Something went wrong
          </h2>
          
          <p className="text-gray-300 mb-6">
            An unexpected error occurred. Please try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              Refresh Page
            </button>
            
            <Link
              to="/"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-xl max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : 'Something went wrong'}
        </h2>
        
        <p className="text-gray-300 mb-6">
          {isRouteErrorResponse(error)
            ? error.data?.message || 'An unexpected error occurred'
            : error.message || 'Please try again later'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
          >
            Refresh Page
          </button>
          
          <Link
            to="/"
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary; 