import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Modal extends Component {
  render() {
    // if (!this.props.show) {
    //   return null;
    // }

    return (
      <div className="Modal">
        <div className="Modal-container">{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  // onClose: PropTypes.func.isRequired,
  // show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
