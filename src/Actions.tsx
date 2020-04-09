import React from 'react';
import { Store } from './store';
import { Iepisode, Iaction, Istate } from './interfaces';
import axios from 'axios';

// function calling an API, with  async and await
export const fetchDataAction = async (dispatch: any, value: string) => {

    console.log("calling from fetchDataAction()");
    const webseries: string = value;
    // const url = "http://api.tvmaze.com/singlesearch/shows?q=game+of+thrones&embed=episodes";
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${webseries}&embed=episodes`;

    const user = {
        "id": 68,
        "name": "gopal",
        "salary": 23315489,
        "teamName": "eternals"
    }

    // axios.post("http://localhost:8080/rest/users/add/user", user)
    //     .then(response => console.log("response", response))
    //     .catch(error => console.log("error", error));

    // const data = await fetch(url);
    // once we get the data, convert that into json
    // const dataJ = await data.json();

    const dataJSON: any = await axios.get(url);
    console.log("dataJSON: ", dataJSON);

    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON.data._embedded.episodes
    });

}

export const toggleFavAction = (episode: Iepisode | any, state: Istate, dispatch: any): Iaction => {
    const episodeInFav = state.favourites.includes(episode);

    console.log("episodeInFav", episodeInFav)

    let dispatchObject = {
        type: 'ADD_FAV',
        payload: episode
    }

    if (episodeInFav) {
        const favWithoutEpisode: Iepisode[] = state.favourites.filter((fav: Iepisode) => fav.id != episode.id);
        dispatchObject = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode
        }
        return dispatch(dispatchObject);
    }

    return dispatch(dispatchObject);
}