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
    <div style={{ height: 670, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }} className="App">
        <div style={{ flexGrow: 1 }}>
          <DataTable organisations={organisations} />
        </div>
      </div>
    </div>
  );
}
