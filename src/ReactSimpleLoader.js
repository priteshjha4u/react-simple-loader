import React from 'react';
import './ReactSimpleLoader.css';
import PropTypes from 'prop-types';

const ReactSimpleLoader = () => {
  return (
    <div className="react-simple-loader">
      <div className="loading" />
      <div className="loading-message" />
    </div>
  );
};

ReactSimpleLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.object
};

export default ReactSimpleLoader;
