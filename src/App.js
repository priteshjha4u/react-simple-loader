import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactSimpleLoader from './ReactSimpleLoader';

/* This component demonstrate, how to use  ReactSimpleLoader component with differnet examples. */
class App extends Component {
  state = {
    showLoader: false,
    LoaderOptions: {}
  };
  timeout = null;
  handleClick = action => {
    this.timeout = setTimeout(() => {
      this.setState({ showLoader: false, LoaderOptions: {} });
    }, 5000);
    if (action === 'simple') {
      this.setState({ showLoader: true, LoaderOptions: {} });
    }
    if (action === 'simpleText') {
      this.setState({ showLoader: true, LoaderOptions: { message: 'Please wait...' } });
    }
    if (action === 'simpleTextPositionTop') {
      this.setState({ showLoader: true, LoaderOptions: { message: 'Please wait...', position: 'top' /* or top */ } });
    }
    if (action === 'simpleTextPositionBottom') {
      this.setState({ showLoader: true, LoaderOptions: { message: 'Please wait...', position: 'bottom' /* or top */ } });
    }
  };
  componentWillMount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  render() {
    const { showLoader, LoaderOptions } = this.state;
    return (
      <div className="container-fluid">
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
              <button className="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simple')}>
                Simple Loader
              </button>
              <button className="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleText')}>
                Loader with text
              </button>
              <button className="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleTextPositionTop')}>
                Loader with text position top
              </button>
              <button className="btn btn-outline-primary ml-2 mb-2" onClick={() => this.handleClick('simpleTextPositionBottom')}>
                Loader with text position bottom
              </button>
            </div>
          </div>
        </div>
        <ReactSimpleLoader show={showLoader} options={LoaderOptions} />
      </div>
    );
  }
}

export default App;
