import React from 'react';
import { Iepisode, Istate, Iaction } from './interfaces';

const initialState: Istate = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<Istate | any>(initialState)


function reducer(state: Istate, action: Iaction): Istate {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, action.payload] };
        case 'REMOVE_FAV':
            return { ...state, favourites: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (<Store.Provider value={{ state, dispatch }}>
        {props.children}
    </Store.Provider>)
}