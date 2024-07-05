import React, { Fragment, useState } from 'react';

function InputTodo() {

    const [description, setDescription] = useState(""); //forming a state for description

    async function onSubmitForm(event) {
        event.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, //is informing the server about the data being sent
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    function handleChange(event) {
        setDescription(event.target.value);
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input style={{ border: '2px solid black' }}
                    type="text" className="form-control" value={description} onChange={handleChange} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;