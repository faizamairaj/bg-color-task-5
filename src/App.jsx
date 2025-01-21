import { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setbackgroundColor] = useState('white');

  return (
    <div className="mt-20 ml-4 sm:ml-8 md:ml-16 lg:ml-32">
      <i>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 md:mb-16">
          Background Color Changer
        </h1>
      </i>

      <div
        style={{ backgroundColor: backgroundColor }}
        className="w-full h-64 sm:h-80 md:h-96 flex justify-center items-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
          Background Color Changer
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
        <button
          className="bg-orange-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('orange');
          }}
        >
          Orange
        </button>

        <button
          className="bg-red-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('red');
          }}
        >
          Red
        </button>

        <button
          className="bg-purple-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('purple');
          }}
        >
          Purple
        </button>

        <button
          className="bg-green-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('green');
          }}
        >
          Green
        </button>

        <button
          className="bg-black text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('black');
          }}
        >
          Black
        </button>

        <button
          className="bg-blue-500 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-md text-lg sm:text-xl md:text-3xl"
          onClick={() => {
            setbackgroundColor('blue');
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
