import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg w-full fixed top-0 z-50">
      <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          YourApp
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {["Features", "About", "FAQ"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {user ? (
            <Link to="/profile" className="flex items-center gap-2">
              <img
                src="/avatar.png"
                alt="User"
                className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600"
              />
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white dark:bg-gray-900 transition-transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {["Features", "About", "FAQ"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            )}
            <span className="text-gray-700 dark:text-gray-300">Toggle Theme</span>
          </button>

          {user ? (
            <Link to="/profile" className="flex items-center gap-2">
              <img
                src="/avatar.png"
                alt="User"
                className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">Profile</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
