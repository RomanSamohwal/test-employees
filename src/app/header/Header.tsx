import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'

export const Header = React.memo(() => {
        return (
            <div style={{width: '100vw'}}>
                <AppBar position="static">
                    <Toolbar className={style.navbar}>
                        <div className={style.item}>
                            <Typography variant="h5">
                                <NavLink to={PATH.MAIN} activeClassName={style.active}>MAIN</NavLink>
                            </Typography>
                        </div>
                        <div className={style.item}>
                            <Typography variant="h5">
                                <NavLink to={PATH.EMPLOYEES} activeClassName={style.active}>EMPLOYEES</NavLink>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
)

export const PATH = {
    MAIN: '/main',
    EMPLOYEES: '/employees',
};