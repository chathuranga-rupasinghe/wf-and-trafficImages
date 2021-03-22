import {action} from 'typesafe-actions';
import {ILocationType} from '../types/location'

import { FETCH_LOCATIONS, FETCH_LOCATIONS_NOT_OK, FETCH_LOCATIONS_OK } from "../action-types";

export const fetchLocations = (selectedVal:string) => action(FETCH_LOCATIONS, selectedVal);

export const fetchLocationsOk = (payload: ILocationType[]) => action(FETCH_LOCATIONS_OK, payload);

export const fetchLocationsNotOk = () => action(FETCH_LOCATIONS_NOT_OK);