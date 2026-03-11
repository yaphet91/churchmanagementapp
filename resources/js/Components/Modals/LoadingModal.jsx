import React, { useState, useEffect } from 'react';

const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default LoadingModal;
