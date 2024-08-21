import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { DeviceList } from './components/camera/DeviceList'
import { ImageConfirmation } from './components/confirmation/ImageConfirmation'

function App() {

  const [isConfirming, setIsConfirming] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleCapture = (img) => {
    setIsConfirming(true);
    setImagePreview(img);
  }

  const discardCapture = () => {
    setIsConfirming(false);
    setImagePreview("");
  }

  return (
    <div>
      <Navbar />

      <div className='m-5'>
        <DeviceList onCapture={handleCapture} className={isConfirming ? "d-none" : ""} />
        <ImageConfirmation image={imagePreview} onDiscard={discardCapture} className={isConfirming ? "" : "d-none"} />
      </div>
      
    </div>
  )
}

export default App
