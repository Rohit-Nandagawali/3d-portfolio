import './App.css'
import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from "react";
const Loader = ({ progress }) => {
  return (
    <div>
      <h2>Loading...</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};

const App = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let intervalId = null;

    const loadSpline = async () => {
      const startTime = Date.now();
      await new Promise((resolve) => {
        const timer = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.round(
            Math.min((elapsedTime / 5000) * 100, 100)
          );
          setLoadingProgress(progress);
        }, 100);

        // Load your Spline component here
        // Once loaded, clear the timer and resolve the promise
        const spline = (
          <Spline
            className="spline"
            scene="https://prod.spline.design/K5N7YUb5ultu502g/scene.splinecode"
            onLoad={() => {
              clearInterval(timer);
              setIsLoaded(true);
              resolve();
            }}
          />
        );
        setIsLoaded(spline);
      });
    };

    loadSpline();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <Loader progress={loadingProgress} />
      ) : (
        <Spline
        className="spline"
        scene="https://prod.spline.design/K5N7YUb5ultu502g/scene.splinecode"/>
      )}
    </div>
  );
};

export default App;
