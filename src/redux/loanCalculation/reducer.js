import { FETCH_SCHEDULES } from '../types'

const initialState = {
  schedules: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SCHEDULES:
      return {
        ...state,
        schedules: action.payload
      };
      default:
        return state;
  }
}