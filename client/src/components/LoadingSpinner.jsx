import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center" role="status" aria-label="Loading">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-gray-400 text-lg">Loading...</p>
    </div>
  );
};

export default LoadingSpinner; 