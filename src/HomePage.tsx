import React from 'react'
import { Store } from './store';
import { Iaction, Iepisode, IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './Actions';
import './index.css';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function HomePage(): JSX.Element {

    const { state, dispatch } = React.useContext(Store);

    // calls after the render() automatically
    // React.useEffect(() => {
    //     console.log("useEffect: ", state.episodes.length);
    //     state.episodes.length == 0 && fetchDataAction(dispatch);
    // });

    const props: IEpisodeProps = {
        episodes: state.episodes,
        state,
        dispatch,
        toggleFavAction, //using es6 syntax we can also, only keep toggleFavAction,                                   
        favourites: state.favourites // rather than this toggleFavAction: toggleFavAction
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}
