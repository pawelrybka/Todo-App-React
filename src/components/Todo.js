import React from 'react'
import TodoItem from './TodoItem'


class Todo extends React.Component {
    state = { 
        elements: [
            {id:'4326346', icCompleted: true, title: 'Wyprowadzić psa'},
            {id:'9539534', isCompleted: false, title: 'Zjeść obiad'},
            {id:'2905706', isCompleted: false, title: 'Wyjść na spacer'},
            {id:'9827356', isCompleted: false, title: 'Przeczytać książkę'}
        ],
        inputValue: '' 
    }
    
    markClicked(id) {
        const index = this.state.elements.findIndex(x => x.id == id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true;
    
        this.setState({ elements: newElements})
    }

    addItem() {
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({ elements: newElements })
    }

    inputHandler(event) {
        const newValue = event.target.value
        this.setState({ inputValue: newValue})
    }


    render() {
        const elements = this.state.elements.map(element => {
            return <TodoItem element={element} markCompleted ={this.markClicked.bind(this)}/>
        })

        return (
            <div className='all'>
                <div>Todo application</div>
                <input type='text' placeholder='New Task' value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Add Task</button>
                {elements}
            </div>          
        )
    }
}

export default Todo