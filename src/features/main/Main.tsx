import React from 'react';
import style from './Main.module.css'

export const Main = React.memo(() => {
    return <div className={style.main}>
        Main
    </div>
})