/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import { } from 'src/store/actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
