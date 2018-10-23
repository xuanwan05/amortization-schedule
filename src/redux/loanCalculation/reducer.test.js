// import reducers from './reducers';

// test('reducers', () => {
//   let state;
//   state = reducers({schedules:{schedules:
//     [{PaymentNumber:0,PaymentAmount:0,PaymentInterest:0,CurrentBalance:100000,TotalPayments:0,TotalInterestPaid:0},
//       {PaymentNumber:1,PaymentAmount:835.96,PaymentInterest:5.21,CurrentBalance:99169.25,TotalPayments:835.96,TotalInterestPaid:5.21},
//       {PaymentNumber:2,PaymentAmount:835.96,PaymentInterest:5.17,CurrentBalance:98338.46,TotalPayments:1671.92,TotalInterestPaid:10.38},
//       {PaymentNumber:3,PaymentAmount:835.96,PaymentInterest:5.12,CurrentBalance:97507.62,TotalPayments:2507.88,TotalInterestPaid:15.5},
//       {PaymentNumber:4,PaymentAmount:835.96,PaymentInterest:5.08,CurrentBalance:96676.74,TotalPayments:3343.84,TotalInterestPaid:20.58}]}});
//     expect(state).toEqual({schedules:{schedules:[{PaymentNumber:0,PaymentAmount:0,PaymentInterest:0,CurrentBalance:100000,TotalPayments:0,TotalInterestPaid:0},
//       {PaymentNumber:1,PaymentAmount:835.96,PaymentInterest:5.21,CurrentBalance:99169.25,TotalPayments:835.96,TotalInterestPaid:5.21},
//       {PaymentNumber:2,PaymentAmount:835.96,PaymentInterest:5.17,CurrentBalance:98338.46,TotalPayments:1671.92,TotalInterestPaid:10.38},
//       {PaymentNumber:3,PaymentAmount:835.96,PaymentInterest:5.12,CurrentBalance:97507.62,TotalPayments:2507.88,TotalInterestPaid:15.5},
//       {PaymentNumber:4,PaymentAmount:835.96,PaymentInterest:5.08,CurrentBalance:96676.74,TotalPayments:3343.84,TotalInterestPaid:20.58}]}});
//       });


import reducer from './reducer';
import {FETCH_SCHEDULES} from './actions';

const defaultState = {
  payLoad: []
};

describe('FETCH_SCHEDULES reducer', () => {
  it('returns default state when no state passed in and action is unknown', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('returns the state with browsing history for FETCH_SCHEDULES', () => {    
    const expectedState = {
      ...defaultState,
      browsingHistory: [{ id: 1 }],
      browsingHistoryLoaded: true,
    };

    const newState = reducer(defaultState, { type: FETCH_SCHEDULES });
    expect(newState).toEqual(expectedState);
  });
});