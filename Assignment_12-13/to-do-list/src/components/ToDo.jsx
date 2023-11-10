import { Component } from "react";

class ToDo extends Component{
    render(){
        const {id, name, action} = this.props
        return(
            <div className="task">
                <h2 className="task-text">{name}</h2>
                <button onClick={() => action(id)}>Done</button>
            </div>
        )
    }
}

export default ToDo