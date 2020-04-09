import React from 'react';
import { Router } from '@reach/router';
import FavPage from '../FavPage';
import HomePage from '../HomePage';

const Route = () => {
    return (
        <div>
            <Router>
                <HomePage path="/" />
                <FavPage path="faves" />
            </Router>
        </div>
    )
}

export default Route;