import React from 'react'

const Home:React.FC = () => {

  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-br from-gray-900 to-gray-700 text-white text-4xl text-center shadow-xl">
      <nav className="flex justify-between items-center px-2 py-2 w-full bg-gray-800 rounded-t-lg shadow-md border-b border-gray-600">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://res.cloudinary.com/avhixorin/image/upload/v1739558168/title_nbauqr.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-500">
          <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="User" className="w-full h-full object-cover" />
        </div>
      </nav>
      <div className="flex-grow flex flex-col gap-4 items-center justify-center font-bold text-gray-300 w-full px-6">
        <input name="note" type="text" placeholder="Enter note" className="w-full p-3 text-lg text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
        <input name="refUrls" type="text" placeholder="Enter reference URL" className="w-full p-3 text-lg text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
      </div>
      <div className="w-full px-6 pb-6">
        <button className="w-full py-3 text-lg font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">Save</button>
      </div>
    </div>
  )
}

export default Home
