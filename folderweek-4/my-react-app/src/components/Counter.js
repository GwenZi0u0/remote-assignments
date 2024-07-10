import { useState } from "react"

function AddAll({onAllClick}){
  return(
    <div className="allCountBtn">
      <button id="allBtn" type="button" onClick={onAllClick}>All + 1</button>
    </div>
  )
}

function Add({ onAddClick}){
  return(
    <>
      <button className="btn" type="button" onClick={onAddClick}><span> + 1</span></button>
    </>
  )
}

function MyValue({ value }){
  return(
    <p className="result">{value}</p>
  )
}

function Total({ total, counterTotal }){
  return(
     <>
      <div className="btnEnter">
        <button className="btn addbtn" type="button" onClick={counterTotal}><span>Add a Counter</span></button>
        <p className="total">{total}</p>
      </div>
    </>
  )
}

export default function Counter (){
  const [ values, setValues ] = useState([0, 0, 0])

  const [total,setTotal] =useState(0)

  // 按下後數值加1
  function handleAddCount(){
    const addValue = values.map(x => x + 1)
    setValues(addValue)
  }

  // 按下後三個按鈕旁的數值同時加1
  function handleOneCount(i){
    const addOneValues = values.slice()
    addOneValues[i] += 1
    setValues(addOneValues)
  }

  function handleTotal(){
    let count = 0
    values.forEach( (x) => {
      count += x
    } )
    setTotal(count)
  }

  return(
    <div className="section_all">
      <div className="section_content">
        <AddAll onAllClick={handleAddCount} />
        <div className="sections">
          {values.map((value, index) => (
            <div className="btns"  key={index}>
              <Add index={index} onAddClick={() => handleOneCount(index)} />
              <MyValue value={value} />
            </div>
          ))}
        </div>
      </div>
      <Total total={total} counterTotal={handleTotal} />
    </div> 
  )

}



//   
//   const handleInOneCount = (i) => {
//     let newCount = count.slice()
//     newCount[i] += 1
//     setCount(newCount)
//   }

//   // const [ onCounts, setOnCounts ] = useState(0)
//   
//   const handleInCounts = (inCounter) => {
//     inCounter = count.map(c => c + 1)
//     setCount(inCounter)
//     setOneCount(oneCount + 1)
//   }

//   // 按下後三個按鈕旁的數值加總
//  const counterTotal = () =>{
//    setCount([...count, 0])
//  }

// function Increment({ i, oneCount, inOneCount}){

//   const [count, setCount] = useState([0, 0, 0])

//   const handleInOneCount = () => {
//     i = count + 1 
//     setCount(i)
//     inOneCount(i)
//   }

//   // const handleInCounts = () =>{
//   //   const inCounter = count.slice()
//   //   inCounter.map(x => x + 1 )
//   //   setCount(inCounter)
//   // }

//   return(
//     <>
//       {/* <div className="allCountBtn">
//           <button id="allBtn" type="button" onClick={handleInCounts}>All + 1</button>
//       </div> */}
//       <div className="sections">
//         <div className="btns">
//         <button className="btn" type="button" onClick={handleInOneCount}><span> + 1</span></button>
//         <p className="result">{oneCount}</p>
//         </div>
//       </div>
//     </>
//   )
// }




