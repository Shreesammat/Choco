interface PopupProp {
  setIsLoggingIn: (isLoggingIn: boolean) => void;
}
const Popup:React.FC<PopupProp> = ({setIsLoggingIn}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center shadow-xl rounded-lg">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center w-full px-4 py-3 bg-gray-800 rounded-t-lg shadow-md border-b border-gray-600">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/avhixorin/image/upload/v1739558168/title_nbauqr.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col flex-grow gap-4 items-center justify-center px-6 text-gray-300 font-bold">
        <p className="text-2xl">To get started, please sign up on our website.</p>
      </div>

      {/* CTA Section */}
      <div className="w-full px-6 pb-6 text-lg">
        <button className="w-full py-3 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
          Sign Up
        </button>
        <p className="mt-3 text-gray-400">
          Already have an account?{" "}
          <button className="text-blue-400 hover:underline"
            onClick={() => setIsLoggingIn(true)}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Popup;
