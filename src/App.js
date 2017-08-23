import React, { Component } from 'react';
import './App.css';
import Code_qr from './components/teacher/Qr';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Start from './components/student/Start';

class App extends Component {
  render() {
    return (
      <Router>
          <main>
              <Route exact path="/" component={Code_qr}/>
              <Route path="/start" component={Start}/>
          </main>
      </Router>
    );
  }
}

export default App;
