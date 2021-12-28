import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
    let TodosStyle = {
        minHeight: "70vh"
    }
    return (
        <div className='container' style={TodosStyle}>
            <h2 className="text-center my-4">Todos List</h2>
            {props.todos.length===0? "No todos to Display":
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
            {/* {props.todos} */}
            {/* <Todo todo = {props.todos[0]}/> */}
        </div>
    )
}
