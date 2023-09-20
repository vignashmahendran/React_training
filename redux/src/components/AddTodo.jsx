import React from 'react'
import {useDispatch} from "react-redux"
import { addTodo,setInput  } from "../features/todo/todoSlice"
import { Button,Form, Input } from "antd"
function AddTodo({style}) {
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(e.target.todo.value))
        e.target.todo.value='';
      
    }
  return (
    <div style={style}>
      <form onSubmit={addTodoHandler}>
        <Input type="text" name="todo" onChange={(e)=>dispatch(setInput(e.target.value))}/>
        <Button style={{ marginLeft: 20 }} htmlType="submit">
          add
        </Button>
      </form>
    </div>
  );
}

export default AddTodo