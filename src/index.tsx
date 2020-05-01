import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { StoreProvider } from './store'
import { Router, RouteComponentProps } from '@reach/router';
import HomePage from './HomePage';
import FavPage from './FavPage';
import Route from './Routes/Route';
import Login from './login';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

// ReactDOM.render(
//     <StoreProvider>
//         <Router>
//             <App path="/">
//                 <RouterPage pageComponent={<HomePage />} path='/' />
//                 <RouterPage pageComponent={<FavPage />} path='/faves' />
//             </App>
//         </Router>
//     </StoreProvider>,
//     document.getElementById('root'))

ReactDOM.render(<StoreProvider>
    <App >
        <Route />
    </App>
</StoreProvider>, document.getElementById("root"));
