import { Component } from "react"
import ToDo from "./ToDo"
import Done from "./Done"

class ToDoList extends Component{

    state = {
        inputValue:  "",
        tasks: [],
        doneTasks: []
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({
          inputValue: value,
        })
      }

    addTask = (event) => {
        event.preventDefault()

        const task = {
            id:  this.state.tasks.length + 1,
            name: this.state.inputValue
        }

        this.setState({
            inputValue: "",
            tasks: [task, ...this.state.tasks]
        })
    }

    markAsDone = (id) => {
        
        const leftList = []
        this.state.tasks.forEach(task => {
            if(task.id === id){
                this.setState({doneTasks: [task, ...this.state.doneTasks]})
            } else {
                leftList.push(task)
            }
        })
        this.setState({tasks: leftList})
    }

    removeTask = (id) => {
        const removedList = this.state.doneTasks.filter(task => task.id !== id)
        this.setState({doneTasks: removedList})
    }
    
    returnTask = (id) => {
        const returnVal = this.state.doneTasks.filter(task => task.id === id)
        returnVal.push(...this.state.tasks)
        const leftVal = this.state.doneTasks.filter(task => task.id !== id)
        this.setState({tasks: returnVal, doneTasks: leftVal})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addTask}>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        value={this.state.inputValue}
                    />
                    <button type="submit">Add Task</button>
                </form>
                <div className="lists">
                    <div className="to-do-list">
                        <h1>To Do List</h1>
                        {this.state.tasks.map((task) => (
                                <ToDo
                                    key = {task.id}
                                    id={task.id}
                                    name={task.name}
                                    action={this.markAsDone}
                                />
                            ))
                        }
                    </div>
                    <div className="done-list">
                        <h1>Done</h1>
                        {
                        this.state.doneTasks.map((task) => (
                                <Done 
                                    key = {task.id}
                                    id = {task.id}
                                    name={task.name}
                                    action = {this.removeTask}
                                    move = {this.returnTask}
                                />
                        )) 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList