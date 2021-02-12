import React, {useEffect} from 'react';
import { API } from './api/api';

function App() {
  useEffect(  () => {
    API.getUsers().then(console.log)
  },[])
  return (
    <div>
    </div>
  );
}

export default App;
