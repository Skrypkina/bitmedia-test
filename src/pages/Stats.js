import React, { Component } from 'react';
import StatsHeader from '../components/StatsHeader/StatsHeader';
import StatsFooter from '../components/StatsFooter/StatsFooter';
import PaginationPage from '../components/PaginationPage/PaginationPage';

// styles

const bodyStyle = {
  height: 'calc(100vh - 50px - 80px)',
};

export default class Stats extends Component {
  render() {
    return (
      <div>
        <StatsHeader />
        <div style={bodyStyle}>
          <PaginationPage />
        </div>
        <StatsFooter />
      </div>
    );
  }
}
