/* eslint-disable no-param-reassign */
import {
  React,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

function getColumns(headers) {
  return headers.filter((el) => el !== null);
}

function getRows(organisations) {
  const result = [];
  Object.entries(organisations)
    .filter(([key]) => key !== 'headers')
    .forEach(([key, row]) => {
      row.id = key;
      result.push(row);
    });
  return result;
}

export default function DataTable(props) {
  const { organisations } = props;
  console.log(organisations);
  const { headers } = organisations;
  const columns = useMemo(() => getColumns(headers), [headers]);
  const rows = useMemo(() => getRows(organisations), [organisations]);

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      showToolbar
    />
  );
}

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  organisations: PropTypes.object.isRequired,
};
