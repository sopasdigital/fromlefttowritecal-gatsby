import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Text extends Component {
  render() {
    return (
      <p className="Text">
        {this.props.children};
      </p>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
