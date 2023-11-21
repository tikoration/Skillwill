
function Done({id, name, action, move}){
    return(
        <div className="task">
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>Delete</button>
            <button onClick={() => move(id)}>Move</button>
        </div>
    )
}

export default Done