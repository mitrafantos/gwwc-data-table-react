import {
  React,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

function TableButton(data, buttonText) {
  if (data.value) {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={data.value}
        >
          {buttonText}
        </Button>
      </strong>
    );
  }
  return data.value;
}

function addButton(header) {
  if (header.button) {
    return {
      ...header,
      renderCell: (params) => (TableButton(params, header.button)),
    };
  }

  return header;
}

function getColumns(headers) {
  return headers.map(addButton);
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
