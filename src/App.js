import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './features/teacher/containers/HomePage';
import QrCodePage from './features/teacher/containers/QrCodePage';
import QuestionsPage from './features/teacher/containers/QuestionsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="app">
          <Route exact path="/" component={HomePage} />
          <Route path="/maestro/comenzar" component={QuestionsPage} />
          <Route path="/maestro/ingresar" component={QrCodePage} />
        </main>
      </Router>
    );
  }
}

export default App;
