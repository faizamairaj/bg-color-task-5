import { useState } from 'react'
import './App.css'

function App() {
 const [backgroundColor , setbackgroundColor] = useState("white")

  return (
  
   <div className='mt-20 ml-32'>
    <i><h1 className='text-5xl font-bold text-white mb-16'>Background Color Changer</h1></i>
    
   <div style={{backgroundColor : backgroundColor}} className='w-full h-96 flex justify-center items-center'>
    <h1 className='text-5xl font-semibold text-white'>Background Color Changer</h1>
   </div>

   <div className='flex mt-10 gap-8'>
   <button className='bg-orange-500 text-white font-bold p-5 rounded-md text-3xl' onClick={()=>{setbackgroundColor('orange')}}>Orange</button> <br/>

   <button className='bg-red-500 text-white font-bold p-5 rounded-md text-3xl'  onClick={()=>{setbackgroundColor('red')}}>Red</button> <br/>

   <button className='bg-purple-500 text-white font-bold p-5 rounded-md text-3xl' onClick={()=>{setbackgroundColor('purple')}}>Purple</button> <br/>

   <button className='bg-green-500 text-white font-bold p-5 rounded-md text-3xl' onClick={()=>{setbackgroundColor('green')}}>Green</button> <br/>

   <button className='bg-black text-white font-bold p-5 rounded-md text-3xl' onClick={()=>{setbackgroundColor('black')}}>Black</button> <br/>

   <button className='bg-blue-500 text-white font-bold p-5 rounded-md text-3xl' onClick={()=>{setbackgroundColor('blue')}}>blue</button> <br/>
   </div>
   </div>
  );
}

export default App;
