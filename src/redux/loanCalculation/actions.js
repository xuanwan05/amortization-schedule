import { FETCH_SCHEDULES, FETCH_SCHEDULES_INCREASE_PAGE, FETCH_SCHEDULES_DECREASE_PAGE,
  RECEIVE_SCHEDULES, FETCH_SCHEDULES_ERROR, RESET_SCHEDULES } from '../types'
import schedules from '../../services/schedules.json'

export const fetchSchedules = (values) => dispatch => {
    fetch(`http://localhost:8080/allmonthlypayments?aAmountBorrowedIncents=${values.loanAmount*100}&aApr=${values.interestRate}&aInitialTermMonths=${values.years*12}`, {
      method: 'GET',  
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(schedules => dispatch({
      type: FETCH_SCHEDULES,
      payload: schedules
    })
    )


    // dispatch({
    //   type: FETCH_SCHEDULES,
    //   payload: schedules
    // })
}


// export default (async function fetchSchedules (dispatch) {
//     console.log("inside")
//     fetch('../services/schedules.JSON')
//       // .then(res => res.json())
//       .then(schedules => dispatch({
//         type: FETCH_SCHEDULES,
//         payload: schedules || []
//       }))

// })


export function fetchSchedulesNextPage() {
  return async function(dispatch, getState) {
    const state = getState();
    dispatch({ type: FETCH_SCHEDULES_INCREASE_PAGE });
    const page = state.schedules.page + 1;

    dispatch({
      type: FETCH_SCHEDULES
    });

    try {
      const response = await fetch(`/fetchSchedules?limit=50&offset=${(page - 1) * 50}`)
        .then(res => res.json())
        .then(schedules => dispatch({
          type: FETCH_SCHEDULES,
          payload: schedules
        }));

      if (response.data.error || !Array.isArray(response.data)) {
        return dispatch(fetchSchedulesError(response.data));
      }

      return dispatch(receiveSchedules(response.data));
    } catch (error) {
      return dispatch(fetchSchedulesError(error.toString()));
    }
  };
}


function receiveSchedules(schedules) {
  return {
    type: RECEIVE_SCHEDULES,
    schedules,
  };
};

function fetchSchedulesError(error) {
  return {
    type: FETCH_SCHEDULES_ERROR,
    error,
  };
};

export function resetSchedules() {
  return {
    type: RESET_SCHEDULES,
  };
};

