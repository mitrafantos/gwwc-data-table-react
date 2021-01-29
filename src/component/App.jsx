import { React, useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';

import organisationsExport from '../gwwc-data-table-organisations-export.json';
import getData from '../utilities/firebase';

export default function App() {
  const [organisations, setOrganisations] = useState(organisationsExport);

  useEffect(() => {
    getData(setOrganisations);
  }, []);

  return (
    <div className="App">
      <DataTable organisations={organisations} />
    </div>
  );
}
