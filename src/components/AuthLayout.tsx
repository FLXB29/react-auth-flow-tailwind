
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-blue-500 rounded-lg w-full max-w-md shadow-xl shadow-gray-300/50 relative overflow-hidden">
        {/* White circular gradient in background */}
        <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent rounded-full w-[200%] h-[200%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
