import React, {useCallback, useEffect} from 'react';
import {Table} from "../components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {deleteUser, fetchUsers} from "../store/users-reducer";

export const TableContainer = () => {
    const users =  useSelector<AppRootStateType>(state => state.users)
    const dispatch = useDispatch()

    const deleteUserHandler = useCallback((id: number) => {
       dispatch(deleteUser({id: id}))
    }, [])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return <Table data = {users} deleteHandler = {deleteUserHandler}/>
}