import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
    '/tasks/GET', 
    async (_, ThunkAPI) => {
        try {
            const res = await fetch("/api/v1/tasks", {
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            if(data) return ThunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return ThunkAPI.rejectWithValue("Something went wrong")
        }
    }
)

export const getOneTask = createAsyncThunk(
 
    async(customUrl, ThunkAPI) => {
      try {
        const res = await fetch(customUrl, {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        })
        const data = await res.json()
        if(data) return ThunkAPI.fulfillWithValue(data)
      } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong")
      }
    }
  )
  
  export const deleteTask = createAsyncThunk(
    '/tasks/DELETE',
    async(customUrl, ThunkAPI) => {
      try {
        const res = await fetch(customUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer  ${process.env.REACT_APP_API_KEY}`
          }
        })
        const data = await res.json()
        if(data) return ThunkAPI.fulfillWithValue(data.items)
      } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong")
      }
    }
  )
  
  export const postTask = createAsyncThunk(
    '/tasks/POST',
    async(taskData, ThunkAPI) => {
      try {
        const res = await fetch("/api/v1/tasks", {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
          body: JSON.stringify(taskData)
        })
        const data = await res.json()
        if(data) return ThunkAPI.fulfillWithValue(data)
      } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong")
      }
    }
  )
  
  
  export const putTask = createAsyncThunk(
    '/tasks/PUT',
    async(taskData, ThunkAPI) => {
      try {
        const res = await fetch("/api/v1/tasks", {
          method: 'PUT',
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
          body: JSON.stringify(taskData)
        })
        const data = await res.json()
        if(data) return ThunkAPI.fulfillWithValue(data.items)
      } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong")
      }
    }
  )
  
  
  