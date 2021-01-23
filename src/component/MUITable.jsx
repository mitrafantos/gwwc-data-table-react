import React from 'react'
import PropTypes from 'prop-types';

import { fade, makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { useGlobalFilter, usePagination, useSortBy, useTable, useFlexLayout } from 'react-table';

import Pagination from './Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const MUITable = ({ columns, data }) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    { columns, data },
    // Global search filter only works with pagination from the first page.
    useGlobalFilter,
    useFlexLayout,
    useSortBy,
    usePagination,
  );

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  }

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  }

  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => !indexs.includes(i));

  // Render the UI for your table
  return (
    <TableContainer>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Charities
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={globalFilter || ''}
            onChange={e => {
              setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`${preGlobalFilteredRows.length} records...`}
            classes={{
              root: classes.inputRoot,
              input: classes.searchInput,
            }}
          />
        </div>
      </Toolbar>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                10,
                25,
                50,
                100,
                { label: 'All', value: data.length },
              ]}
              colSpan={6}
              count={data.length}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{ native: true }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

MUITable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default MUITable;
