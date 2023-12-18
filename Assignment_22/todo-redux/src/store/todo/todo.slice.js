import { createSlice } from "@reduxjs/toolkit"
import { getTasks, deleteTask, postTask, putTask, getOneTask } from "./todo.thunks"

const initialState = {
  todoList: [],
  loading: false,
  error: null,
  chosenTask: '',
  newTask: ''
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.todoList = action.payload
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(postTask.pending, (state) => {
        state.loading = true
      })
      .addCase(postTask.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.newTask = action.payload
      })
      .addCase(postTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(putTask.pending, (state) => {
        state.loading = true
      })
      .addCase(putTask.fulfilled, (state) => {
        state.loading = false
        state.error = null  
      })
      .addCase(putTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getOneTask.pending, (state) => {
        state.loading = true
      })
      .addCase(getOneTask.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.chosenTask = action.payload
      })
      .addCase(getOneTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
