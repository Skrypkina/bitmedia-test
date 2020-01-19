import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import users from '../../users.json';
import clicks from '../../clicks.json';

import styles from './PaginationPage.module.css';

// helpers

const mergeArrays = (array1, array2) => {
  const array = [];
  array1.forEach(arr => {
    array2.forEach(item => {
      if (arr.id === item.user_id) {
        const mergedObj = { ...arr, ...item };
        array.push(mergedObj);
      }
    });
  });
  return array;
};

const merged = mergeArrays(users, clicks);

export default class PaginationPage extends Component {
  state = {
    items: merged,
    currentPage: 1,
    linksPerPage: 12,
  };

  handleClick = event => {
    // console.log(event.target.id);

    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { items, currentPage, linksPerPage } = this.state;

    // Logic for displaying items
    const indexOfLastItem = currentPage * linksPerPage;
    const indexOfFirstItem = indexOfLastItem - linksPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return (
        <tbody key={index} className={styles.tableCell}>
          <tr>
            <td>
              <Link to={`/stats/${item.id}`} className={styles.link}>
                {item.id}
              </Link>
            </td>
            <td>
              <Link to={`/stats/${item.id}`} className={styles.link}>
                {item.first_name}
              </Link>
            </td>
            <td>
              <Link to={`/stats/${item.id}`} className={styles.link}>
                {item.last_name}
              </Link>
            </td>
            <td>
              <span className={styles.tableSpan}>
                <Link to={`/stats/${item.id}`} className={styles.link}>
                  {item.email}
                </Link>
              </span>
            </td>
            <td>
              <span className={styles.tableSpan}>
                <Link to={`/stats/${item.id}`} className={styles.link}>
                  {item.gender}
                </Link>
              </span>
            </td>
            <td>
              <span className={styles.tableSpan}>
                <Link to={`/stats/${item.id}`} className={styles.link}>
                  {item.ip_address}
                </Link>
              </span>
            </td>
            <td>
              <span className={styles.tableSpan}>
                <Link to={`/stats/${item.id}`} className={styles.link}>
                  {item.clicks}
                </Link>
              </span>
            </td>
            <td>
              <span className={styles.tableSpan}>
                <Link to={`/stats/${item.id}`} className={styles.link}>
                  {item.page_views}
                </Link>
              </span>
            </td>
          </tr>
        </tbody>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / linksPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      let className = styles.paginationListItem;
      if (this.state.currentPage === number) className = styles.active;

      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={className}
        >
          {number}
        </li>
      );
    });

    return (
      <div className={styles.container}>
        <p className={styles.paragrahp}>
          Main page ><span className={styles.span}> Users statistics </span>
        </p>
        <h2 className={styles.title}>Users statistics</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableRow}>Id</th>
              <th className={styles.tableRow}>First name</th>
              <th className={styles.tableRow}>Last name</th>
              <th className={styles.tableRowFullScreen}>
                <span className={styles.tableSpan}>Email</span>
              </th>
              <th className={styles.tableRowFullScreen}>
                <span className={styles.tableSpan}>Gender</span>
              </th>
              <th className={styles.tableRowFullScreen}>
                <span className={styles.tableSpan}>IP address</span>
              </th>
              <th className={styles.tableRowFullScreen}>
                <span className={styles.tableSpan}>Total clicks</span>
              </th>
              <th className={styles.tableRowFullScreen}>
                <span className={styles.tableSpan}>Total page views</span>
              </th>
            </tr>
          </thead>
          {renderItems}
        </table>
        <ul id="page-numbers" className={styles.paginationList}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
