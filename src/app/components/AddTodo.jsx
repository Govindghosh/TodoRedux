import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {
    const [input, setInput]=useState('');
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
            <form onSubmit={addTodoHandler} className="mx-auto flex items-center space-x-0 mt-12 ">
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={input}
                    className="bg-gray-700 rounded border border-gray-600 focus:border-indigo-400
            focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>setInput(e.target.value)}
                    />
                        <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded"
                >
                    Add
                </button> 
             </form>
        </>
    );
}

export default AddTodo;
