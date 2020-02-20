import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Customers, Plans } from '../pages';
import { Layout } from '../UI';
import { Provider, createClient, Client } from 'urql';

class Router extends React.Component<{}> {

  private client: Client = createClient({
    url: 'http://localhost:4000/graphql',
  });

  private publicRoutes = (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/customers" exact={true} component={Customers} />
      <Route path="/plans" exact={true} component={Plans} />
    </Switch>
  );

  public render() {
    return (
      <Provider value={this.client}>
        <BrowserRouter>
          <Layout>
            {this.publicRoutes}
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;