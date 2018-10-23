import { FETCH_SCHEDULES, START_FETCH_SCHEDULES, SCHEDULES_ERROR} from '../types'

const initialState = {
  schedules: [],
  schedulesLoaded: false,
  schedulesLoading: false,
  schedulesError: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SCHEDULES:
      return {
        ...state,
        schedules: action.payload,
        schedulesLoaded: true,
        schedulesLoading: false,
        schedulesError: ''
      };
    case START_FETCH_SCHEDULES:
      return {
        ...state,
        schedulesLoaded: false,
        schedulesLoading: true,
        schedulesError: ''
      };
    case SCHEDULES_ERROR:
      return {
        ...state,
        schedules: [],
        schedulesLoaded: false,
        schedulesLoading: false,
        schedulesError: action.error
      };
      default:
        return state;
  }
}