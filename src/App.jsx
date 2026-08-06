
import './App.css'
import { FaTrash } from "react-icons/fa";

function App() {

  return (
    <>
    <div className='container'>
      <div className='sub-container1'>
        <p className='text'>Enter task</p>
      </div>
      <div className='sub-container2'>
        <p className='text2'>Add</p>
      </div>
    </div>

    <div className='body'>
      <div className='container2'>
        <p className='text3'>Learn React</p>
        <button className='delete-btn'><FaTrash/></button>
      </div>
      <div className='container2'>
        <p className='text3'>Build my first react proj</p>
        <button className='delete-btn'><FaTrash/></button>
      </div>
    </div>
    </>
  )
}

export default App
