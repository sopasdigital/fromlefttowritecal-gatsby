import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Heading extends Component {
  render() {
    const { level } = this.props;
    const h = `h${level}`;

    return (
      <h className="Heading">
        {this.props.children}
      </h>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};
