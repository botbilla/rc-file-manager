import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Header</p>
      </div>
    );
  }
}
