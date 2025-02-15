import React, { useState } from 'react'
import Popup from './components/Popup';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
const App:React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className='w-[500px] h-[500px] overflow-y-auto scrollbar-thin bg-black'>
      {
        user ? <Home /> : (isLoggingIn ? <LoginPage setIsLoggingIn={setIsLoggingIn} /> : <Popup setIsLoggingIn={setIsLoggingIn} />)
      }
      
    </div>
  )
}

export default App
