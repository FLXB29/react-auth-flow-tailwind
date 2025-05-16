
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
