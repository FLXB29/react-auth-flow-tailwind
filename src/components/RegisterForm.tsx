
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu không khớp",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally handle registration
    toast({
      title: "Đang xử lý",
      description: "Đang đăng ký tài khoản...",
    });
    
    console.log('Register attempt:', { email, password });
  };

  return (
    <div className="w-full max-w-md text-white p-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white">SIGN UP</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="signup-email" className="block text-white text-sm">Email</label>
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-black h-10 border-0"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="signup-password" className="block text-white text-sm">Password</label>
          <div className="relative">
            <Input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white text-black h-10 border-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="signup-confirm-password" className="block text-white text-sm">Confirm password</label>
          <div className="relative">
            <Input
              id="signup-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white text-black h-10 border-0"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full h-10 bg-white hover:bg-gray-100 text-blue-600 font-medium border-0"
        >
          Sign up
        </Button>
        
        <Button 
          type="button"
          variant="outline" 
          onClick={onSwitchToLogin}
          className="w-full h-10 border border-white text-white bg-transparent hover:bg-blue-600"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
