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
    .filter(([slug]) => slug !== 'headers' && slug !== 'filters' && slug !== 'sort')
    .map(([, row]) => row);
}

function getFilterModel(filterModel) {
  return filterModel;
}

function getSortModel(sortModel) {
  return sortModel;
}

export default function DataTable(props) {
  const { organisations } = props;
  const { headers } = organisations;
  const { filters } = organisations;
  const { sort } = organisations;
  const columns = useMemo(() => getColumns(headers), [headers]);
  const rows = useMemo(() => getRows(organisations), [organisations]);
  const filterModel = useMemo(() => getFilterModel(filters), [filters]);
  const sortModel = useMemo(() => getSortModel(sort), [sort]);

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      filterModel={filterModel}
      sortModel={sortModel}
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
