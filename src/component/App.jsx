import './App.css';
import DataTable from './DataTable'
import { useState, useEffect } from 'react';

import getData from '../utilities/firebase';

function App() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getData(setOrganizations)
  }, [])

  return (
    <div className="App">
      <DataTable organizations={organizations}></DataTable>
    </div>
  );
}

export default App;
