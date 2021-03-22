import {ILocationType} from './location'
export interface IAppStateType {
    location:ILocations
}

interface ILocations{
    locations:ILocationType[];
}