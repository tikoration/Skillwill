const initialState = {
    todoList: []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {todoList: [action.payload, ...state.todoList]}
        case 'DELETE_TODO':
            return {todoList: state.todoList.filter(todo => todo.id !== action.payload)}
        case 'DONE_TODO':
            return {todoList: state.todoList.map(todo=> 
                todo.id === action.payload ?
                {...todo, isDone: true} :
                todo
            )}
        default:
            return state
    }
    
}