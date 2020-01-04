import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import StatsPage from '../../pages/Stats';
import NotFound from '../../pages/NotFound';
import UserStats from '../../pages/UserStats';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/stats/:id" component={UserStats} />
      <Route path="/stats" component={StatsPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
