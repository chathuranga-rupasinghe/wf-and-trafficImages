import {action} from 'typesafe-actions';

import { FETCH_LOCATIONS, FETCH_LOCATIONS_NOT_OK, FETCH_LOCATIONS_OK } from "../action-types";

export const fetchLocations = () => action(FETCH_LOCATIONS);

export const fetchLocationsOk = (payload: any) => action(FETCH_LOCATIONS_OK, payload);

export const fetchLocationsNotOk = (payload: any) => action(FETCH_LOCATIONS_NOT_OK, payload);