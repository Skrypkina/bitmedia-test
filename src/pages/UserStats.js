import React, { Component } from 'react';
import StatsFooter from '../components/StatsFooter/StatsFooter';
import StatsHeader from '../components/StatsHeader/StatsHeader';
import clicks from '../clicks.json';
console.log(clicks);

// styles

const bodyStyle = {
  height: 'calc(100vh - 50px - 80px)',
};

export default class Stats extends Component {
  state = {};

  render() {
    return (
      <div>
        <StatsHeader />
        <div style={bodyStyle}>
          <p>Single stats page</p>
        </div>
        <StatsFooter />
      </div>
    );
  }
}
