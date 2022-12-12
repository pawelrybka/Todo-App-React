import React from "react";
import TodoItem from './TodoItem'


class Todo extends React.Component {
    state = { 
        elements: [
            {id:'3218732', isCompleted: false, title:'Wysrać się'},
            {id:'9420521', isCompleted: true, title:'Puścić bąksa'},
            {id:'7641203', isCompleted: false, title:'Wypić pącz'}
        ]  
    }
    
    markCompleted(id) {
        const index = this.state.elements.findIndex(x => x.id == id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true
        
        this.setState( { elements:newElements })
    
    }

    render() {
        const elements = this.state.elements.map(e => {
           return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
        })
    
        return(
            <div>
                Todo App
                <input type='text'/>
                <button>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default Todo