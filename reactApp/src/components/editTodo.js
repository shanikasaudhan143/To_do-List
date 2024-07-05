import React,{Fragment, useState} from 'react';

function EditTodo(todo)
{   
    const [description, setDescription]=useState(todo.description);

    // function handleChange(event)
    // {
    //     setDescription(event.target.value);
    // }
    // function handleClick(event)
    // {
    //     updateDescription(event);
    // }
    //edit description
    async function updateDescription(event)
    {   
        event.preventDefault();
        try {
            const body={description}
            const response= await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location='/';
        } catch (error) {
            console.error(error.message);
        }
    }
    return <Fragment>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
      Edit
    </button>
    
    {/* <!-- The Modal --> */}
    <div className="modal" id={`id${todo.todo_id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
    
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">Edit-todo</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
          {/* <!-- Modal body --> */}
          <div className="modal-body">
            {/* Modal body.. */}
            <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
          </div>
    
          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
          <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e=>updateDescription(e)}>Edit</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
}
export default EditTodo;