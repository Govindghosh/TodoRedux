import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../feature/todo/todoSlice'

function Todos() {
  const todos =  useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
  <ul className="list-none ">
    {todos.map((todo)=>(
      <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
        <div className="text-white">{todo.text}</div>
      <button
      onClick={()=>dispatch(removeTodo(todo.id))}><div className="bg-red-300 rounded p-2"><i  key={todo.id} className="fi fi-rs-eraser "></i></div></button></li>
    ))}
</ul>
    </>
  )
}

export default Todos
