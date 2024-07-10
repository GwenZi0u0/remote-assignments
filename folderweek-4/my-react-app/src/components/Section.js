// import { useState } from "react"

// function Increment({ i, oneCount, inOneCount}){

//     const [count, setCount] = useState([0, 0, 0])
  
//     const handleInOneCount = () => {
//       i = count + 1 
//       setCount(i)
//       inOneCount(i)
//     }
  
//     // const handleInCounts = () =>{
//     //   const inCounter = count.slice()
//     //   inCounter.map(x => x + 1 )
//     //   setCount(inCounter)
//     // }
  
//     return(
//       <>
//         {/* <div className="allCountBtn">
//             <button id="allBtn" type="button" onClick={handleInCounts}>All + 1</button>
//         </div> */}
//         <div className="sections">
//           <div className="btns">
//           <button className="btn" type="button" onClick={handleInOneCount}><span> + 1</span></button>
//           <p className="result">{oneCount}</p>
//           </div>
//         </div>
//       </>
//     )
//   }

// export default Increment

// function Increment (){
//     const [count, setCount] = useState(0);

//     const increment = ( ) => {
//         setCount(count + 1);
//         return(
//             <div className="btn">
//                 <button type="button" onClick={increment}><span> + 1</span></button>
//                 <p className="result">{count}</p>
//             </div>
//         )
//     }
// }

// const IncrementCount = function (){
    
//     const [count, setCount] = useState(0);
  
//     const element = Increments.value;

//     return(
//          <>
//             <div className="btn all">
//                 <button id="allBtn" type="button">All + 1</button>
//             </div>
//         </>
//     )
// }


// export default IncrementCount