import React from 'react';
import './ReactSimpleLoader.css';
import PropTypes from 'prop-types';

class ReactSimpleLoader extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = '';
  }
  render() {
    let message = '',
      position = '';
    if (this.props.options && this.props.options.message) {
      message = this.props.options.message;
    }
    if (this.props.options && this.props.options.position) {
      position = this.props.options.position;
    }
    return (
      <div className="react-simple-loader">
        <div className="loading" />
        <div className={`loading-message ${position}`}>{message}</div>
      </div>
    );
  }
}

ReactSimpleLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.object
};

export default ReactSimpleLoader;
