import React, {useState} from 'react';
import {addlist, removeList, selectTodo} from '../todoSlice';
import {useDispatch, useSelector} from 'react-redux';

function Todo() {
  const list = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("Item 1");
  // const handleSubmit = () =>{}
  console.log(Array.isArray(list))
  return (
    <div className='container'>
        <h1 className='m-5'>Todo List</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <input type="text" className='px-3' value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}} />
          <input type="submit" className='bg-primary text-white border-primary' value="Add to List" onClick={()=>{dispatch(addlist(inpVal))}}/>
        </form>
        <div className='list mt-2'>
        {list.map((lis, i) => {return <p key={i} className='text-primary'>{lis} - <span className='close text-danger fw-bolder'  onClick={()=>{dispatch(removeList(i))}}>[X]</span></p>} )}
        </div>
    </div>
  )
}

export default Todo