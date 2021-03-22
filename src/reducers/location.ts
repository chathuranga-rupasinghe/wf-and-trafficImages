import { FETCH_LOCATIONS_NOT_OK, FETCH_LOCATIONS_OK } from '../action-types';

export default (
    state = {
      locations: [],
    },
    action:any,
  ) => {
    switch (action.type) {
      case FETCH_LOCATIONS_OK: {
        return {...state, locations:action.payload};
      }
      case FETCH_LOCATIONS_NOT_OK: {
        return {...state, locations:[]};
      }
      default:
        return state;
    }
  };
  