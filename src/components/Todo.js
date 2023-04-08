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
    <div>
        <h1>Todo List</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <input type="text" value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}} />
          <input type="submit" value="Add to List" onClick={()=>{dispatch(addlist(inpVal))}}/>
        </form>
        {list.map((lis, i) => {return <p key={i} >{lis} - <span className='close'  onClick={()=>{dispatch(removeList(i))}}>X</span></p>} )}
        {/* {inpVal} */}
    </div>
  )
}

export default Todo