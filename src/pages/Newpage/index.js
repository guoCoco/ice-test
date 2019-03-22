import React, { Component } from 'react';
import HotRank from './components/HotRank';

export default class Newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="newpage-page">
        <HotRank />
      </div>
    );
  }
}
