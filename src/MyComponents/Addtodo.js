import React from 'react'
import { useState } from 'react';

export const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title and description cannot be blank");
        }else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-5'>
            <h2>Write text below, I will save it for you in your Local storage</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    )
}
