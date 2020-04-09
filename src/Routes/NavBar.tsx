import React from 'react';
import { Link } from '@reach/router';


const NavBar = (props: any) => {
    console.log("From NavBar: ", props);
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{' '}
                <Link to="faves">FavEpisodes:{props.favlength}</Link>{' '}
                <a href="http://localhost:8989/logout">logout</a>
            </nav>
        </div>
    )
}

export default NavBar;