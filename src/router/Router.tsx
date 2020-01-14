import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Customers } from '../pages';
import { Layout } from '../UI';

class Router extends React.Component<{}> {

  private publicRoutes = (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/customers" exact={true} component={Customers} />
    </Switch>
  );

  public render() {
    return (
      <BrowserRouter>
        <Layout>
          {this.publicRoutes}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;