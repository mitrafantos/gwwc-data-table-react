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
  Object.entries(organisations)
    .filter(([slug]) => slug !== 'headers')
    .map(([slug, row]) => ({ id: slug, ...row }));
}

export default function DataTable(props) {
  const { organisations } = props;
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
