import useFetch from "../hooks/useFetch"

const MainPage = () => {

    const {response, error, loading} = useFetch({url: '/api/v1/tasks', method: "GET"})
    const toDoList = response?.items.map(task => {
      return {
        name: task.name,
        id: task._uuid,
        isCompleted: task.isCompleted
      }
    }) || []

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div className="App">
        
            {toDoList.map((todo) => 
            <div className="task" key={todo.id}>
                <h3>{todo.name}</h3>
                <button onClick={() => !todo.isCompleted}>Done</button>
            </div>
            )}
        </div>
    )
}

export default MainPage