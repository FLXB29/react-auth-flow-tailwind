
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
    <div className="w-full max-w-md animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">ĐĂNG NHẬP</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="login-password">Mật khẩu</Label>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Quên mật khẩu
            </a>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Đăng nhập
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">Chưa có tài khoản?</p>
        <Button 
          variant="outline" 
          onClick={onSwitchToRegister}
          className="w-full"
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
