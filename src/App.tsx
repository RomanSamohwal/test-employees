import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUsers } from './store/users-reducer';
import {AppRootStateType} from "./store/store";
import { Loading } from './common/Loading';

function App() {
  const dispatch = useDispatch()

  const status = useSelector<AppRootStateType>(state => state.app.status)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if(status === 'loading') {
    return <Loading/>
  }


  return (
      <div>

      </div>
  );
}

export default App;
