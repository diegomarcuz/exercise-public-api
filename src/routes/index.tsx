import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/Errors';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
