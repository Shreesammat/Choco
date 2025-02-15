import React, { useState } from "react";
import useUpdateNotes from "../hooks/useUpdateNotes";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

interface LoginPageProps {
  setIsLoggingIn: (isLoggingIn: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggingIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { signIn } = useUpdateNotes();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const data = await signIn("https://walrus-app-s94dg.ondigitalocean.app/user/login", {
        email,
        password,
      });
      dispatch(setUser(data.data.user));
      setIsLoggingIn(false);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <button
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition duration-200"
        onClick={() => setIsLoggingIn(false)}
      >
        <span className="text-lg font-semibold">Back</span>
      </button>

      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-400 mb-6">Please log in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
          >
            {isLoading ? "Loggin In..." : "Log In" }
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
