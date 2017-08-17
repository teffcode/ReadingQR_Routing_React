import React, { Component } from 'react';
import './App.css';
import Code_qr from './components/teacher/qr';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import start from './components/student/start';

class App extends Component {
  render() {
    return (
      <Router>
          <main>
              <Route exact path="/" component={Code_qr}/>
              <Route path="/start" component={start}/>
          </main>
      </Router>
    );
  }
}

export default App;
