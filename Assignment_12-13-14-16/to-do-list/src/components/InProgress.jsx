

const InProgress = ({id, name, action, index}) => {

    const colorArr = ['red', 'yellow', 'blue', 'green']

    if(index > 3){
        index = index % 3
    }

    return(
        <div className={`task ${colorArr[index]}`}>
            <h2 className="task-text">{name}</h2>
            <button onClick={() => action(id)}>Done</button>
        </div>
    )
} 

export default InProgress