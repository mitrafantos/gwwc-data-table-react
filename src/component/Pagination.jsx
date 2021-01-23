import React from 'react';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const Pagination = (props) => {
  const classes = useStyles();
  const {
    count, page, rowsPerPage, onChangePage,
  } = props;
  const lastPage = Math.ceil(count / rowsPerPage) - 1;

  const goToPage = (targetPage) => (event) => {
    onChangePage(event, targetPage);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={goToPage(0)} disabled={page === 0}>
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={goToPage(page - 1)} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={goToPage(page + 1)} disabled={page >= lastPage}>
        <KeyboardArrowRight />
      </IconButton>
      <IconButton onClick={goToPage(Math.max(0, lastPage))} disabled={page >= lastPage}>
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
