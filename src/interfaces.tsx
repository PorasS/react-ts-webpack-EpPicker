/**
 * All the interfaces
 */

export interface Iepisode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: {
        medium: string,
        original: string
    },
    summary: string
}

export interface Istate {
    episodes: Array<Iepisode>,
    favourites: Array<Iepisode> | any
}

export interface Iaction {
    type: string,
    payload: Iepisode[]
}

export interface IEpisodeProps {

    episodes: Array<Iepisode>,
    state: Istate,
    dispatch: any,
    toggleFavAction: (episode: Iepisode, state: Istate, dispatch: any) => Iaction,
    favourites: Array<Iepisode>

}