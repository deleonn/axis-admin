import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import { Provider, createClient, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';

const client = createClient({
	url: 'http://localhost:4000/graphql',
	exchanges: [devtoolsExchange, ...defaultExchanges]
})

export const App: FC = () => (
  <Provider value={client}>
		<Router />
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
