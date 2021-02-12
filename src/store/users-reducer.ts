import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { setAppStatusAC } from "./app-reducer";
import {API, DataType} from "../api/api";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
        const res = await API.getUsers()
        const users = res.data
        thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
        return {users}
    });

const slice = createSlice({
    name: 'users',
    initialState: [] as DataType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.push(...action.payload.users)
        })
    }
})

export const usersReducer = slice.reducer


