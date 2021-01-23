/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';

import getData from '../utilities/firebase';

function App() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getData(setOrganizations);
  }, []);

  return (
    <div className="App">
      <DataTable organizations={organizations} />
    </div>
  );
}

export default App;
