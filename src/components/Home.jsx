import React,{useState} from 'react'

function Home() {
    const [a, setA] = useState(0);
    const Increment =()=>{
        setA(a+1);
    }
    const Decrement =()=>{
        setA(a-1);
    }
    
  return (
    <div>
        <button onClick={Increment}>Add</button>
        <p>{a}</p>
        <button onClick={Decrement}>Minus</button>
    </div>
  )
}

export default Home