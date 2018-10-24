import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from './actions';
import { FETCH_SCHEDULES, START_FETCH_SCHEDULES} from '../types'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fentch schedules actions', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create action FETCH_SCHEDULES after successful schedules grab', (done) => {
    const expectedActions = [
      { type: START_FETCH_SCHEDULES},
      { type: FETCH_SCHEDULES, 
        payload: {
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
          ] 
        }
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        // response: {schedules: {}}
        response: {
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
        ] 
      }
      });
    }, 5);

    const store = mockStore({ schedules: { schedules: [] } });
    return store.dispatch(actions.fetchSchedules({loanAmount: 10000, interestRate: 2, years: 12})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }).catch(function(e) {
      done.fail(e);
    });
  });
});
