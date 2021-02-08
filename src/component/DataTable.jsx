import {
  React,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

function getColumns(headers) {
  return headers;
}

function getRows(rows) {
  return rows;
}

function getFilterModel(filterModel) {
  return filterModel;
}

function getSortModel(sortModel) {
  return sortModel;
}

export default function DataTable(props) {
  const { organisations } = props;
  const columns = useMemo(() => getColumns(organisations.headers), [organisations.headers]);
  const rows = useMemo(() => getRows(organisations.rows), [organisations.rows]);
  const filterModel = useMemo(() => getFilterModel(organisations.filters), [organisations.filters]);
  const sortModel = useMemo(() => getSortModel(organisations.sort), [organisations.sort]);

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
