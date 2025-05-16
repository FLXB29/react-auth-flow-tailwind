
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập email và mật khẩu",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally handle authentication
    toast({
      title: "Đang xử lý",
      description: "Đang đăng nhập...",
    });
    
    console.log('Login attempt:', { email, password });
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Quên mật khẩu",
      description: "Tính năng đặt lại mật khẩu sẽ được triển khai sau.",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-md text-white animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">LOGIN</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="login-email" className="block text-white">Email</label>
          <Input
            id="login-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-black h-12"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="login-password" className="block text-white">Password</label>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white text-black h-12"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
          
          <div className="flex justify-end">
            <a 
              href="#" 
              onClick={handleForgotPassword}
              className="text-sm text-white hover:underline"
            >
              Forgot password
            </a>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-blue-100 hover:bg-blue-200 text-blue-800"
        >
          Login
        </Button>
        
        <Button 
          type="button"
          variant="outline" 
          onClick={onSwitchToRegister}
          className="w-full h-12 border-2 border-white text-white bg-blue-700 hover:bg-blue-800"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
