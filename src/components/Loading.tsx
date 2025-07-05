import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="loading mb-4"></div>
        <p className="text-gray-600">Yükleniyor...</p>
      </div>
    </div>
  );
};

export default Loading; 