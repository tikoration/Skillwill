
function Done({id, name, action, move, index}){
    const colorArr = ['green', 'blue', 'yellow', 'red']

    if(index > 3){
        index = index % 3
    }

    return(
        <div className={`task ${colorArr[index]}`}>
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>Delete</button>
            <button onClick={() => move(id)}>Move</button>
        </div>
    )
}

export default Done