/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import { CHANGE_FRONT_CATEGORY, CHANGE_BACK_CATEGORY, CHANGE_OTHER_CATEGORY } from 'src/store/actions';

const initialState = {
  selectedLanguagesCategory: {
    name: 'front-end',
    translateY: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FRONT_CATEGORY:
      return {
        ...state,
        selectedLanguagesCategory: {
          name: 'front-end',
          translateY: 0,
        },
      };
    case CHANGE_BACK_CATEGORY:
      return {
        ...state,
        selectedLanguagesCategory: {
          name: 'back-end',
          translateY: 340,
        },
      };
    case CHANGE_OTHER_CATEGORY:
      return {
        ...state,
        selectedLanguagesCategory: {
          name: 'other',
          translateY: 670,
        },
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
