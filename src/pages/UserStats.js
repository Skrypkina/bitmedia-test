import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import StatsFooter from '../components/StatsFooter/StatsFooter';
import StatsHeader from '../components/StatsHeader/StatsHeader';
import Paragraph from '../components/Paragraph/Paragraph';
import users from '../users.json';

const getIdFromProps = props => props.match.params.id;

// styles

const bodyStyle = {
  height: 'calc(100vh - 50px - 80px)',
  position: 'relative',
  width: 800,
  hight: 700,
};

export default class Stats extends Component {
  state = {
    user: {},
    data: {},
    // data: {
    //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    //   datasets: [
    //     {
    //       label: 'clicks',
    //       backgroundColor: 'rgba(123, 25, 24, 0.75)',
    //       data: [4, 5, 1, 10, 32, 2, 12],
    //     },
    //     {
    //       label: 'page-views',
    //       backgroundColor: 'rgba(46, 96, 147, 0.75)',
    //       data: [14, 15, 21, 0, 12, 4, 2],
    //     },
    //   ],
    // },
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const userToFind = users.find(item => item.id === Number(id));
    this.setState({
      user: userToFind,
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'clicks',
            backgroundColor: 'rgba(123, 25, 24, 0.75)',
            data: userToFind.clicksArr,
          },
          {
            label: 'page-views',
            backgroundColor: 'rgba(46, 96, 147, 0.75)',
            data: userToFind.page_viewsArr,
          },
        ],
      },
    });
  }

  render() {
    const { user, data } = this.state;

    return (
      <div>
        <StatsHeader />

        <div style={bodyStyle}>
          {user && (
            <Paragraph firstName={user.first_name} lastName={user.last_name} />
          )}

          <Line options={{ responsive: true }} data={data} />
        </div>

        <StatsFooter />
      </div>
    );
  }
}
