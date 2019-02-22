import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactSimpleLoader from './ReactSimpleLoader';

class App extends Component {
  state = {
    show: false,
    options: {}
  };
  timeout = null;
  handleClick = action => {
    this.timeout = setTimeout(() => {
      this.setState({ show: false, options: {} });
    }, 5000);
    if (action === 'simple') {
      this.setState({ show: true, options: {} });
    }
    if (action === 'simpleText') {
      this.setState({ show: true, options: { message: 'Request in progress! Please wait...' } });
    }
    if (action === 'simpleTextPosition') {
      this.setState({ show: true, options: { message: 'Request in progress! Please wait...', position: 'top' /* or bottom */ } });
    }
    if (action === 'simpleColor') {
      this.setState({ show: true, options: { color: '#FF0000' } });
    }
  };
  componentWillMount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  render() {
    const { show, options } = this.state;
    return (
      <React.Fragment>
        <div className="row bg-dark text-white shadow p-2">
          <div className="col-md-12">
            <h4 className="text-center">React Simple Loader</h4>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-3 mb-4">
          <div className="font-weight-bold text-center">Each example loader will disappear automatically after 5 seconds.</div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <button cls="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simple')}>
                Simple Loader
              </button>
              <button cls="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleText')}>
                Loader with text
              </button>
              <button cls="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleTextPosition')}>
                Loader with text position
              </button>
              <button cls="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleColor')}>
                Custom color loader
              </button>
            </div>
          </div>
        </div>
        {show && <ReactSimpleLoader show={show} options={options} />}
      </React.Fragment>
    );
  }
}

export default App;
