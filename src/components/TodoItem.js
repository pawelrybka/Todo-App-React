import React from "react";

const TodoItem = props =>  {
    const markClicked = () => props.markCompleted(props.element.id)
    return (
        <div className={`card ${props.element.isCompleted ? 'completed' : ''}`}  key={props.element.id}>
            <h2>{props.element.title}</h2>
            <button onClick={markClicked} className="tak">Zakończone</button>
        </div>
    )
}


export default TodoItem

