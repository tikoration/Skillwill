import { PureComponent } from "react";

class Done extends PureComponent{
    render(){
       const {id, name, action, move} = this.props
        return(
            <div className="task">
                <h2 className="task-text">{name}</h2>
                <button onClick={() => action(id)}>Delete</button>
                <button onClick={() => move(id)}>Move</button>
            </div>
        )
    }
}

export default Done