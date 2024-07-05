import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './editTodo';
function ListTodo() {

    const[todos, setTodos]=useState([]);
    async function getTodos()
    {
        try {
            const response =await fetch("http://localhost:5000/todos");
            const jsonData= await response.json();

            // console.log(jsonData);
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function DeleteTodo(id)
    {
        try{
            const deleteTodo= await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });
            console.log(deleteTodo);
            setTodos(todos.filter((todo)=> todo.todo_id!==id));
        } catch(error)
        {
            console.error(error.message);
        }
    }
    //running getTodos when it's get mounted
    useEffect(()=>{
        getTodos();
    },[]);
    console.log(todos);
    return <Fragment>
        <table style={{border:"2px solid black"}} className="table mt-5 text-center" >
            <thead>
                <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                
    
                {todos.map((todo)=>(
                    <tr key={todo.todo_id}>
                        <td>
                            {todo.description}
                        </td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>DeleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Fragment>;
}
export default ListTodo;