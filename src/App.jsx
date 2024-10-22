// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   return (
//     <div>
//       <h3>Number is {num} </h3>
//       <button onClick={function () {
//         setNum(num + 1);
//       }} >Increase</button>
//       <button onClick={function () {
//         setNum(num - 1);
//       }} >Decrease</button>
//     </div>
//   )
// }

// export default App

// ---------------------FORM HANDLING-------------------------


// import React from 'react'

// const App = () => {
//   const submitHandler = () => {
//     console.log("Form Submitted!");

//   }
//   return (
//     <div className=' bg-gray-700 h-screen w-full'>
//       <form onSubmit={(e) => {
//         submitHandler(e);
//         e.preventDefault();
//       }} >
//         <input type="text" placeholder='Enter Your Name' />
//         <button className='bg-gray-900 text-white px-5 py-1 rounded mx-1 my-2 font-semibold' >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App