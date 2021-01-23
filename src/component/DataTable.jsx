import React, { useMemo } from 'react';
// import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import MUITable from './MUITable';

function getColumns() {
  return [
    {
      accessor: 'charity',
      Header: 'Charity',
    },
    {
      accessor: 'cause',
      Header: 'Cause Area',
    },
    {
      accessor: 'totalDonations',
      Header: 'Total Donations',
    },
    {
      accessor: 'gwwcDonations',
      Header: 'GWWC Donations',
    },
    {
      accessor: 'slug',
      id: 'donate',
      Header: 'Donate',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => {
        // TODO: update url
        const url = `https://app.effectivealtruism.org/donations/new/allocation?allocation[${value}]=100`;
        return <a href={url}>Donate</a>;
      },
      disableSortBy: true,
    },
    {
      accessor: 'slug',
      id: 'learnMore',
      Header: 'Learn More',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => {
        // TODO: update url
        const url = `https://app.effectivealtruism.org/funds/${value}`;
        return <a href={url}>Learn More</a>;
      },
      disableSortBy: true,
    },
  ];
}

function filterEmpty(str) {
  // TODO handle null value filtering upstream in excel sheet import to firebase
  if (str === '&null') return '';
  if (str === '#N/A') return '';
  return str;
}

function createRows(organizations) {
  const data = Object.entries(organizations);
  return data.map(([slug, item]) => ({
    slug,
    charity: filterEmpty(item['Full Name']),
    cause: filterEmpty(item['Core Cause']),
    totalDonations: filterEmpty(item['Total Donations']),
    gwwcDonations: filterEmpty(item['GWWC &dollar donated']),
  })).filter((x) => !!x.charity);
}

function DataTable(props) {
  const { organizations } = props;
  const data = useMemo(() => createRows(organizations), [organizations]);
  const columns = useMemo(getColumns, []);

  return (
    <MUITable data={data} columns={columns} />
  );
}

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  organizations: PropTypes.object.isRequired,
};

export default DataTable;
