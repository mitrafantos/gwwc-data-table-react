import {
  React,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

function getColumns(headers) {
  return headers;
}

function getRows(organisations) {
  return Object.entries(organisations)
    .filter(([slug]) => slug !== 'headers' && slug !== 'filters')
    .map(([, row]) => row);
}

function getFilterModel(filters) {
  return filters;
}

export default function DataTable(props) {
  const { organisations } = props;
  const { headers } = organisations;
  const { filters } = organisations;
  const columns = useMemo(() => getColumns(headers), [headers]);
  const rows = useMemo(() => getRows(organisations), [organisations]);
  const filterModel = useMemo(() => getFilterModel(filters), [filters]);

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      filterModel={filterModel}
      showToolbar
      disableDensitySelector
      disableColumnMenu
    />
  );
}

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  organisations: PropTypes.object.isRequired,
};
