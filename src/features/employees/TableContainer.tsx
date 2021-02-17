import React, {useCallback} from 'react';
import {Table} from '../../components/table/Table';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {deleteUser} from '../../bll/users-reducer';
import {InputForm} from './InputForm';
import style from './Form.module.css'

export const TableContainer = () => {
    const users = useSelector<AppRootStateType>(state => state.users)
    const dispatch = useDispatch()

    const deleteUserHandler = useCallback((id: number) => {
        dispatch(deleteUser({id: id}))
    }, [])

    return <div className={style.container}>
        <InputForm/>
        <Table data={users} deleteHandler={deleteUserHandler}/>
    </div>
}