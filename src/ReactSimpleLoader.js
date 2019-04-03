import React from 'react';
import ReactDOM from 'react-dom';
import './ReactSimpleLoader.css';
import PropTypes from 'prop-types';

const ReactSimpleLoader = props => {
  if (!props.show) {
    return null;
  }
  let message = '',
    position = '';
  let wrapper = document.getElementById('simple-loader-wrapper');
  if (!wrapper) {
    const div = document.createElement('div');
    div.id = 'simple-loader-wrapper';
    document.body.appendChild(div);
    wrapper = div;
  }
  if (props.options && props.options.message) {
    message = props.options.message;
  }
  if (props.options && props.options.position) {
    position = props.options.position;
  }
  const loaderContent = (
    <div className="react-simple-loader">
      <div className="loading" />
      {message ? <div className={`loading-message ${position}`}>{message}</div> : null}
    </div>
  );
  return ReactDOM.createPortal(loaderContent, wrapper);
};

ReactSimpleLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.object
};

export default ReactSimpleLoader;
