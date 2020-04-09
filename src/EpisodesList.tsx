import React from 'react';
import { Iepisode } from './interfaces';
import './index.css';

export default function EpisodeList(props: any): Array<JSX.Element> {
    const { episodes, state, dispatch, toggleFavAction, favourites } = props;

    console.log("from props in EpisodeList: ", props);
    return episodes.lenght != 0 ?
        episodes.map((episode: Iepisode) => {
            return (
                <section key={episode.id} className="episode-box">
                    <img src={episode.image.medium} alt={`Game Of Thrones ${episode.name}`} />
                    <div>{episode.name}</div>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>season: {episode.season} episode: {episode.number}</div>
                        <button type='button' onClick={() => toggleFavAction(episode, state, dispatch)}>{favourites.find((fav: Iepisode) => fav.id == episode.id) ? 'UnFav' : 'Fav'}</button>
                    </section>
                </section>
            );
        }) : <div>Not Found</div>

}
