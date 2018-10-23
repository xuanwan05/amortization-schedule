import axios from 'axios';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('browsing history functions', function() {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create action RECEIVE_BROWSING_HISTORY after successful browsing history grab', (done) => {
    const expectedActions = [
      { type: actions.GET_BROWSING_HISTORY, username: 'khawley@lscom.net', startTime: 123, endTime: 456 },
      { type: actions.RECEIVE_BROWSING_HISTORY, browsingHistory: [{id: 1}] },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{id: 1}],
      });
    }, 5);

    const store = mockStore({ browsingHistory: { browsingHistory: [] } });
    return store.dispatch(actions.getBrowsingHistory('khawley@lscom.net', 123, 456)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }).catch(function(e) {
      done.fail(e);
    });
  });

  it('should create actions after successful forward-paging event', (done) => {
    const expectedActions = [
      { type: actions.BROWSING_HISTORY_INCREASE_PAGE },
      { type: actions.GET_BROWSING_HISTORY, username: 'khawley@lscom.net', startTime: 123, endTime: 456 },
      { type: actions.RECEIVE_BROWSING_HISTORY, browsingHistory: [{id: 1}] },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{id: 1}],
      });
    }, 5);

    const store = mockStore({
      browsingHistory: {
        browsingHistory: [],
        username: 'khawley@lscom.net',
        startTime: 123,
        endTime: 456,
        page: 1,
      },
    });
    return store.dispatch(actions.browsingHistoryNextPage()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }).catch(function(e) {
      done.fail(e);
    });
  });

  it('should create actions after successful backward-paging event', (done) => {
    const expectedActions = [
      { type: actions.BROWSING_HISTORY_DECREASE_PAGE },
      { type: actions.GET_BROWSING_HISTORY, username: 'khawley@lscom.net', startTime: 123, endTime: 456 },
      { type: actions.RECEIVE_BROWSING_HISTORY, browsingHistory: [{id: 1}] },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{id: 1}],
      });
    }, 5);

    const store = mockStore({
      browsingHistory: {
        browsingHistory: [],
        username: 'khawley@lscom.net',
        startTime: 123,
        endTime: 456,
        page: 2,
      },
    });
    return store.dispatch(actions.browsingHistoryPreviousPage()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }).catch(function(e) {
      done.fail(e);
    });
  });

});
