import { React, useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';

import getData from '../utilities/firebase';

export default function App() {
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
