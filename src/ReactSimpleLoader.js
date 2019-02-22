import React, { Component } from 'react';
import './ReactSimpleLoader.css';
import PropTypes from 'prop-types';

class ReactSimpleLoader extends Component {
  render() {
    return (
      <div className="react-simple-loader">
        <div className="loading" />
        <div className="loading-message" />
      </div>
    );
  }
}

ReactSimpleLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.object
};

export default ReactSimpleLoader;
