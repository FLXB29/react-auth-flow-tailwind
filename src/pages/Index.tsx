
import React, { useState } from 'react';
import AuthLayout from '@/components/AuthLayout';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

const Index = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleSwitchToLogin = () => {
    setIsLoginView(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginView(false);
  };

  return (
    <AuthLayout>
      {isLoginView ? (
        <LoginForm onSwitchToRegister={handleSwitchToRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
      )}
    </AuthLayout>
  );
};

export default Index;
