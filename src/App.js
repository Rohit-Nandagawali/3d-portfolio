import './App.css'
import React, { Suspense } from 'react';
import Console from './Console.jsx'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Console/>}>
        <Spline className="spline" scene="https://prod.spline.design/K5N7YUb5ultu502g/scene.splinecode" />
      </Suspense>
    </div>
  );
}