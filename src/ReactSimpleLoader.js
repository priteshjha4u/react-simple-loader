import React from 'react';
import './ReactSimpleLoader.css';
import PropTypes from 'prop-types';

const ReactSimpleLoader = props => {
  if (!props.show) {
    return null;
  }
  let message = '',
    position = '';
  if (props.options && props.options.message) {
    message = props.options.message;
  }
  if (props.options && props.options.position) {
    position = props.options.position;
  }
  return (
    <div className="react-simple-loader">
      <div className="loading" />
      {message ? <div className={`loading-message ${position}`}>{message}</div> : null}
    </div>
  );
};

ReactSimpleLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.object
};

export default ReactSimpleLoader;
