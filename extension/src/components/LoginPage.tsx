import { ArrowBigLeft } from "lucide-react";
import React from "react";
interface LoginPageProps {
  setIsLoggingIn: (isLoggingIn: boolean) => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggingIn }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <button className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition duration-200">
        <ArrowBigLeft size={28} onClick={() => setIsLoggingIn(false)} />
        <span className="text-lg font-semibold">Back</span>
      </button>

      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-400 mb-6">Please log in to continue</p>

        <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
