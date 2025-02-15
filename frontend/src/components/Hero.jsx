import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Effortless Note-Taking, Anytime, Anywhere.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Organize your thoughts, boost productivity, and access your notes seamlessly.
          </p>
          <div className="space-x-4">
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="#features" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="w-full h-64 bg-blue-100 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
