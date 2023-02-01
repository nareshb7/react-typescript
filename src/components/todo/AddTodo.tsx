import React, {useState} from 'react'

const AddTodo =()=> {
  const [ipt,setIpt] = useState('')
  return (
    <div>
      <div>
        <input type='text' name='todoIpt' value={ipt} onChange={(e)=> setIpt(e.target.value)} />
      </div>
      <div>
        <button>Add Todo</button>
      </div>
    </div>
  )
}
export default AddTodo