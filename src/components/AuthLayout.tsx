
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl shadow-gray-300/50">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
