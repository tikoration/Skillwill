import { memo } from "react"


function ToDo({id, name, action, done, index}){

const colorArr = ['blue', 'red', 'yellow', 'green']

if(index > 3){
    index = index % 3
}

return(
        <div className={`task ${colorArr[index]}`}>
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>In Progress</button>
            <button onClick={() => done(id)}>Done</button>
        </div>
    )
}

export default memo(ToDo)