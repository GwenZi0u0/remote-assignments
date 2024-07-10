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


