import React, { useState, useEffect } from 'react';
import './Console.css';

export default function Console(){
  const loadingMessages= [
    "Loading 3D room...",
    "Installing packages...",
    "Initializing components...",
    "Configuring settings...",
    "Loading textures...",
    "Compiling shaders...",
    "Optimizing performance...",
    "Loading plugins...",
    "Starting services...",
    "Loading assets...",
    "Starting server...",
    "Loading resources...",
    "Initializing engine...",
    "Preparing models...",
    "Parsing data...",
    "Loading scripts...",
    "Setting up environment...",
    "Loading modules...",
    "Initializing application...",
    "Launching program...",
     "Starting, Please Wait..."

  ]
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentMessageIndex < loadingMessages.length - 1) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [currentMessageIndex, loadingMessages]);

  return (
    <div className="loader">
      <span className="loading-message">{loadingMessages[currentMessageIndex]}</span>
      <span className="loading-slash">/</span>
    </div>
  );
};
