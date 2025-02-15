import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signIn } = useFetch();
  const url = import.meta.env.VITE_LOGIN_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn(url, {
        email,
        password,
      });
      dispatch(setUser(data.data.user));
      navigate("/u/:data.data.user.username");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-gray-900 bg-gray-100">
      <div className="w-96 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Login
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md 
              bg-white text-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
