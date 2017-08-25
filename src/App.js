import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './features/teacher/components/HomePage';
import RulesPage from './features/teacher/components/RulesPage';
import PlayPage from './features/teacher/components/PlayPage';
import QuestionsPage from './features/teacher/containers/QuestionsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="app">
          <Route exact path="/" component={HomePage} />
          <Route path="/reglas" component={RulesPage} />
          <Route path="/jugar" component={PlayPage} />
          <Route path="/juego" component={QuestionsPage} />
        </main>
      </Router>
    );
  }
}

export default App;
