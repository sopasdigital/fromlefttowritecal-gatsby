import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class CategoryTitle extends Component {
  render() {
    return (
      <span className="CategoryTitle">
        {this.props.children}
      </span>
    );
  }
}

CategoryTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

