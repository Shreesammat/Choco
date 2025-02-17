import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState(""); 
  const [password, setPassword] = React.useState("");
  const [loading, setLoading ] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUp, fetchNotes } = useFetch();
  const url = import.meta.env.VITE_REGISTER_URL;
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const data = await signUp(url, {
        name,
        username,
        email,
        password,
      });
      setLoading(false)
      dispatch(setUser(data.data));
      console.log("The signUp response is", data);
      localStorage.setItem("jwtToken", JSON.stringify(data.token));
      const love = await fetchNotes(import.meta.env.VITE_NOTES_URL);
      console.log("The notes fetch res is:",love);
      navigate(`/u/${data.data.username}`);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  return (
    <>
   
    <div className='w-full h-screen flex justify-center items-center dark:bg-gray-900 bg-gray-100'>
      <div className="w-96 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Sign Up
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              htmlFor="Full Name"
              className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              id="Full Name"
              type="text"
              name="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Full Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
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


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
          >
            {loading ? "Signinig up": "Sign up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
    </>
    
  )
}

export default SignUp
