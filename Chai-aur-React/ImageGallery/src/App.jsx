import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageCard from './components/ImageCard'
import './App.css'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Gallery />
      </div>
    </div>
  );
}

