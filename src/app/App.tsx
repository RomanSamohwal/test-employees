import React, {useEffect} from 'react';
import {Basic} from './Basic';
import {HashRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../bll/store';
import {fetchUsers} from '../bll/users-reducer';
import {Loading} from '../common/progress/Loading';

function App() {

    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType>(state => state.app.status)
    const error = useSelector<AppRootStateType>(state => state.app.error)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (status === 'loading') {
        return <Loading/>
    }

    return <>
        <HashRouter>
            <Basic/>
        </HashRouter>
    </>
}

export default App;
