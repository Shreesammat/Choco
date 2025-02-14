import React from 'react'
import Popup from './components/Popup';
const App:React.FC = () => {
  return (
    <div className='w-[300px] h-[400px] overflow-y-auto scrollbar-thin bg-black'>
      <Popup />
    </div>
  )
}

export default App
