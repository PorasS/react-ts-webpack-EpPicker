import React from 'react';
import { Store } from './store';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction } from './Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));


export default function FavPage(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);

    const props: IEpisodeProps = {
        episodes: state.favourites,
        state,
        dispatch,
        toggleFavAction, //using es6 syntax we can also, only keep toggleFavAction,                                   
        favourites: state.favourites // rather than this toggleFavAction: toggleFavAction
    }


    console.log("state object from FavPage");
    console.log(state);
    const renderFav = (): JSX.Element => {
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

    //if state.favourites.length != 0 then call renderFav()
    return state.favourites.length != 0 && renderFav();

}
