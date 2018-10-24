import reducer from './reducer';
import { FETCH_SCHEDULES, START_FETCH_SCHEDULES, SCHEDULES_ERROR} from '../types'

const defaultState = {
  schedules: [],
  schedulesLoaded: false,
  schedulesLoading: false,
  schedulesError: ''
};

describe('FETCH_SCHEDULES reducer', () => {
  it('returns default state when no state passed in and action is unknown', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('returns the loading state for START_FETCH_SCHEDULES', () => {
    const expectedState = {
      ...defaultState,
      schedulesLoaded: false,
      schedulesLoading: true,
      schedulesError: ''
    };

    const newState = reducer(defaultState, {type: START_FETCH_SCHEDULES});
    expect(newState).toEqual(expectedState);
  });

  it('returns the state with schedules for FETCH_SCHEDULES', () => {    
    const expectedState = {
      ...defaultState,
      schedules: 
        [
          {
            paymentNumber: 0,
            curMonthlyPaymentAmountIncents: 0,
            curMonthlyInterestIncents: 0,
            curBalanceIncents: 10000,
            totalPaymentsIncents: 0,
            totalInterestPaidIncents: 0
          },
          {
            paymentNumber: 1,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 17,
            curBalanceIncents: 9175,
            totalPaymentsIncents: 842,
            totalInterestPaidIncents: 17
          },
          {
            paymentNumber: 2,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 15,
            curBalanceIncents: 8348,
            totalPaymentsIncents: 1684,
            totalInterestPaidIncents: 32
          },
          {
            paymentNumber: 3,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 14,
            curBalanceIncents: 7520,
            totalPaymentsIncents: 2526,
            totalInterestPaidIncents: 46
          },
          {
            paymentNumber: 4,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 13,
            curBalanceIncents: 6691,
            totalPaymentsIncents: 3368,
            totalInterestPaidIncents: 59
          },
          {
            paymentNumber: 5,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 11,
            curBalanceIncents: 5860,
            totalPaymentsIncents: 4210,
            totalInterestPaidIncents: 70
          },
          {
            paymentNumber: 6,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 10,
            curBalanceIncents: 5028,
            totalPaymentsIncents: 5052,
            totalInterestPaidIncents: 80
          },
          {
            paymentNumber: 7,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 8,
            curBalanceIncents: 4194,
            totalPaymentsIncents: 5894,
            totalInterestPaidIncents: 88
          },
          {
            paymentNumber: 8,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 7,
            curBalanceIncents: 3359,
            totalPaymentsIncents: 6736,
            totalInterestPaidIncents: 95
          },
          {
            paymentNumber: 9,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 6,
            curBalanceIncents: 2523,
            totalPaymentsIncents: 7578,
            totalInterestPaidIncents: 101
          },
          {
            paymentNumber: 10,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 4,
            curBalanceIncents: 1685,
            totalPaymentsIncents: 8420,
            totalInterestPaidIncents: 105
          },
          {
            paymentNumber: 11,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 3,
            curBalanceIncents: 846,
            totalPaymentsIncents: 9262,
            totalInterestPaidIncents: 108
          },
          {
            paymentNumber: 12,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 1,
            curBalanceIncents: 5,
            totalPaymentsIncents: 10104,
            totalInterestPaidIncents: 109
          },
          {
            paymentNumber: 13,
            curMonthlyPaymentAmountIncents: 5,
            curMonthlyInterestIncents: 0,
            curBalanceIncents: 0,
            totalPaymentsIncents: 10109,
            totalInterestPaidIncents: 109
          }
        ],
      schedulesLoaded: true,
      schedulesLoading: false,
      schedulesError: ''
    };

    const newState = reducer(defaultState, { type: FETCH_SCHEDULES, 
      payload: 
        [
          {
            paymentNumber: 0,
            curMonthlyPaymentAmountIncents: 0,
            curMonthlyInterestIncents: 0,
            curBalanceIncents: 10000,
            totalPaymentsIncents: 0,
            totalInterestPaidIncents: 0
          },
          {
            paymentNumber: 1,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 17,
            curBalanceIncents: 9175,
            totalPaymentsIncents: 842,
            totalInterestPaidIncents: 17
          },
          {
            paymentNumber: 2,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 15,
            curBalanceIncents: 8348,
            totalPaymentsIncents: 1684,
            totalInterestPaidIncents: 32
          },
          {
            paymentNumber: 3,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 14,
            curBalanceIncents: 7520,
            totalPaymentsIncents: 2526,
            totalInterestPaidIncents: 46
          },
          {
            paymentNumber: 4,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 13,
            curBalanceIncents: 6691,
            totalPaymentsIncents: 3368,
            totalInterestPaidIncents: 59
          },
          {
            paymentNumber: 5,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 11,
            curBalanceIncents: 5860,
            totalPaymentsIncents: 4210,
            totalInterestPaidIncents: 70
          },
          {
            paymentNumber: 6,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 10,
            curBalanceIncents: 5028,
            totalPaymentsIncents: 5052,
            totalInterestPaidIncents: 80
          },
          {
            paymentNumber: 7,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 8,
            curBalanceIncents: 4194,
            totalPaymentsIncents: 5894,
            totalInterestPaidIncents: 88
          },
          {
            paymentNumber: 8,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 7,
            curBalanceIncents: 3359,
            totalPaymentsIncents: 6736,
            totalInterestPaidIncents: 95
          },
          {
            paymentNumber: 9,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 6,
            curBalanceIncents: 2523,
            totalPaymentsIncents: 7578,
            totalInterestPaidIncents: 101
          },
          {
            paymentNumber: 10,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 4,
            curBalanceIncents: 1685,
            totalPaymentsIncents: 8420,
            totalInterestPaidIncents: 105
          },
          {
            paymentNumber: 11,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 3,
            curBalanceIncents: 846,
            totalPaymentsIncents: 9262,
            totalInterestPaidIncents: 108
          },
          {
            paymentNumber: 12,
            curMonthlyPaymentAmountIncents: 842,
            curMonthlyInterestIncents: 1,
            curBalanceIncents: 5,
            totalPaymentsIncents: 10104,
            totalInterestPaidIncents: 109
          },
          {
            paymentNumber: 13,
            curMonthlyPaymentAmountIncents: 5,
            curMonthlyInterestIncents: 0,
            curBalanceIncents: 0,
            totalPaymentsIncents: 10109,
            totalInterestPaidIncents: 109
          }
        ],     
    });
    expect(newState).toEqual(expectedState);
  });

  it('returns the error state with SCHEDULES_ERROR', () => {
    const expectedState = {
      ...defaultState,
      schedulesError: 'this is an error!',
    };

    const newState = reducer(defaultState, { type: SCHEDULES_ERROR, error: 'this is an error!' });
    expect(newState).toEqual(expectedState);
  });
});