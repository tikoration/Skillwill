

const InProgress = ({id, name, action}) => {
    return(
        <div className="task">
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>Done</button>
        </div>
    )
} 

export default InProgress