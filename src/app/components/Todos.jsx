import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../feature/todo/todoSlice'

function Todos() {
  const todos =  useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
  <ul className="list-none">
    {todos.map((todo)=>(
      <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
      kay={todo.id}
      ><div className="text-white">{todo.text}</div>
      <button
      onClick={()=>dispatch(removeTodo(todo.id))}><i class="fi fi-rs-eraser"></i></button></li>
    ))}
</ul>
    </>
  )
}

export default Todos
