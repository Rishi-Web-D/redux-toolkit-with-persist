import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'

function App() {
  const [updater, setUpdater] = useState(null)
  const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const HandleIncrement = () => {
    dispatch(increment())
  }

  const HandleDecrement = () => {
    dispatch(decrement())
  }

  const HandleReset = () => {
    dispatch(reset())
  }
  const HandleUpdateByValue = () => {
    dispatch(incrementByAmount(updater))
  }

  return (
    <>
      <div className="card">
        <button style={{width:"200px"}} onClick={HandleIncrement}>
          +
        </button>
      </div>
      <h1>Count: {count}</h1>
      <div className="card">
        <button style={{width:"200px"}} onClick={HandleDecrement}>
          -
        </button>
      </div>
      <button style={{width:"200px",backgroundColor:"red"}} onClick={HandleReset}>
         Reset
      </button>
      <div className="card">
        <input type="text" onChange={(e)=> setUpdater(e.target.value)} value={updater} placeholder='Update value by ' />
        <button  onClick={HandleUpdateByValue}>
         Update
        </button>
      </div>
    </>
  )
}

export default App
