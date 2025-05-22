import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, Check } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    setIsLoading(true);
    // Simulate loading for demo
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-pink-900 p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-pink-400/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-500/40 to-purple-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative bg-black/60 backdrop-blur-lg border-purple-500/30 shadow-2xl shadow-purple-500/30">
        <CardHeader className="text-center pb-2">
          {/* Logo */}
          <div className="mx-auto mb-6 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-400/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl blur opacity-50"></div>
          </div>
          
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
            Join XEUR.AI
          </CardTitle>
          <CardDescription className="text-gray-200 mt-2">
            Create your account and start building amazing projects
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-white">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input 
                  id="fullName" 
                  type="text" 
                  placeholder="John Doe"
                  className="pl-10 h-12 bg-black/40 border-purple-400/50 focus:border-pink-400 focus:ring-pink-400/50 text-white placeholder-gray-300 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com"
                  className="pl-10 h-12 bg-black/40 border-purple-400/50 focus:border-pink-400 focus:ring-pink-400/50 text-white placeholder-gray-300 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-12 h-12 bg-black/40 border-purple-400/50 focus:border-pink-400 focus:ring-pink-400/50 text-white placeholder-gray-300 transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-white">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-12 h-12 bg-black/40 border-purple-400/50 focus:border-pink-400 focus:ring-pink-400/50 text-white placeholder-gray-300 transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-3">
              <button
                type="button"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  agreedToTerms 
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 border-pink-400' 
                    : 'border-purple-400/50 hover:border-pink-400/70'
                }`}
              >
                {agreedToTerms && <Check className="w-3 h-3 text-white" />}
              </button>
              <div className="text-sm text-gray-200 leading-5">
                I agree to the{' '}
                <Link to="/terms-of-service" className="text-pink-300 hover:text-pink-200 underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-pink-300 hover:text-pink-200 underline">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className={`w-full h-12 font-medium shadow-lg transition-all duration-200 transform ${
                agreedToTerms && !isLoading
                  ? 'bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-300 hover:to-purple-400 shadow-pink-400/50 hover:scale-[1.02] text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed shadow-gray-600/25'
              }`}
              disabled={!agreedToTerms || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-400/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black/60 text-gray-200">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center w-full h-12 px-4 text-sm font-medium text-white bg-purple-500/30 border border-purple-400/50 rounded-lg hover:bg-purple-400/40 hover:border-purple-300/60 transition-all duration-200"
            >
              Sign In Instead
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}