import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {Loading} from './common/Loading';
import {TableContainer} from "./features/TableContainer";

function App() {

  const status = useSelector<AppRootStateType>(state => state.app.status)

  /*if(status === 'loading') {
    return <Loading/>
  }*/
  return <TableContainer/>
}

export default App;
