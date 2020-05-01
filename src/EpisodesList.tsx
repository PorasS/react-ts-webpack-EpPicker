import React from 'react';
import { Iepisode } from './interfaces';
import './index.css';

export default function EpisodeList(props: any): Array<JSX.Element> {
    const { episodes, state, dispatch, toggleFavAction, favourites } = props;

    console.log("from props in EpisodeList: ", props);
    return (
        episodes.map((episode: Iepisode) => {
            return (
                <section key={episode.id} className="episode-box">
                    <div className="image-style">
                        <img src={episode.image.medium} alt={`${episode.name}`} />
                    </div>
                    <div>{episode.name}</div>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>season: {episode.season} episode: {episode.number}</div>
                        <button type='button' onClick={() => toggleFavAction(episode, state, dispatch)}>{favourites.find((fav: Iepisode) => fav.id == episode.id) ? 'UnFav' : 'Fav'}</button>
                    </section>
                </section>
            );
        }))

}
