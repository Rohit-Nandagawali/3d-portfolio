import './Console.css'
import Typist from "react-typist";

export default function Console()  {


  const messages = [
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
  ];

  return (
    <div className="console">
     
        <div className="loading">
          <Typist cursor={{ hideWhenDone: true }} avgTypingDelay={50}>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </Typist>
          <div className="loader">/</div>
        </div>
     
    </div>
  );
};

