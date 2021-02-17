import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PATH} from '../header/Header';
import {TableContainer} from '../../features/employees/TableContainer';
import {Main} from '../../features/main/Main';

export const Routes = () => {
    return <Switch>
        <Route exact path='/'>
            <Redirect to={PATH.MAIN}/>
        </Route>
        <Route exact path={PATH.MAIN} render={() => <Main/>}/>
        <Route exact path={PATH.EMPLOYEES} render={() => <TableContainer/>}/>
    </Switch>
}