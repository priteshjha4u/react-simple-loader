import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row bg-dark text-white shadow p-2">
          <div className="col-md-12">
            <h4 className="text-center">React Simple Loader</h4>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <button cls="btn btn-outline-primary ml-2 mb-2">Simple Loader</button>
              <button cls="btn btn-outline-primary ml-2 mb-2">Loader with text</button>
              <button cls="btn btn-outline-primary ml-2 mb-2">Loader with text position</button>
              <button cls="btn btn-outline-primary ml-2 mb-2">Custom color loader</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
