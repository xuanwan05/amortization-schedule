import axios from 'axios'
import { FETCH_SCHEDULES, START_FETCH_SCHEDULES, SCHEDULES_ERROR} from '../types'

export const fetchSchedules = (values) => async dispatch => {
    dispatch({type: START_FETCH_SCHEDULES})

    try {
      const response = await axios({
        methos:'get',
        url: `http://localhost:8080/allmonthlypayments?aAmountBorrowedIncents=${values.loanAmount*100}&aApr=${values.interestRate}&aInitialTermMonths=${values.years*12}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).catch((error) => 
        error.response
      )

    if (response.data.error || !Array.isArray(response.data)) {
      return dispatch(fetchSchedulesError(response.data));
    }

    return dispatch({type: FETCH_SCHEDULES, payload: response.data})
  } catch (error) {
    return dispatch(fetchSchedulesError(error.toString()));
  }
}

function fetchSchedulesError(error) {
  return {
    type: SCHEDULES_ERROR,
    error,
  };
};