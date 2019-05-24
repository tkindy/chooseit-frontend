import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Room from './room';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/room/:id" component={Room} />
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
