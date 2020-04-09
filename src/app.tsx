import React from 'react'
import { Store } from './store';
import NavBar from './Routes/NavBar';
import './index.css';
import { fetchDataAction } from './Actions';

export default function App(props: any): JSX.Element {

    const { state, dispatch } = React.useContext(Store);
    const [value, setValue] = React.useState<string>("");
    const [seriesName, setSeriesName] = React.useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("value", value);
        fetchDataAction(dispatch, value);
        setSeriesName(value);
        setValue("");
    }

    return (
        <div>
            <header className='header'>
                {console.log("fav episodes: ", state)}
                <div>
                    <h1>WebSeries Finder</h1>
                    <h2>{seriesName}</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} required />
                            <button type='submit'>Search</button>
                        </form>
                        <NavBar favlength={state.favourites.length} />
                        {/* <Route /> */}
                    </div>
                </div>
                {/* <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
                </div> */}
            </header>
            {props.children}
        </div>
    )
}
