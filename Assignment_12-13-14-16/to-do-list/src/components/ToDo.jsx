
function ToDo({id, name, action}){
    return(
        <div className="task">
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>In Progress</button>
        </div>
    )
}

export default ToDo