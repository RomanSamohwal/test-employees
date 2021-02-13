import {createAsyncThunk, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";
import {API, DataType, UserType} from "../api/api";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (param, thunkAPI) => {
        try {
            thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
            const res = await API.getUsers()
            const users = res.data
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return {users}
        } catch (e) {
            thunkAPI.dispatch(setAppErrorAC({error: 'some error'}))
            thunkAPI.rejectWithValue(null)
        }
    });

const slice = createSlice({
    name: 'users',
    initialState: [] as DataType,
    reducers: {
        addUser(state, action: PayloadAction<{ user:  UserType}>) {
            state.unshift({...action.payload.user})
        },
        deleteUser(state, action: PayloadAction<{id: number}>){
            return state.filter(user => user.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            if (action.payload !== undefined) {
                state.push(...action.payload.users)
            }
        })
    }
})


export const usersReducer = slice.reducer
export const {addUser, deleteUser} = slice.actions

