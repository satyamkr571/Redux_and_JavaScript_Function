import createSagaMiddleware from "redux-saga";

import { takeEvery, put, call } from "redux-saga/effects";

const redux = require("redux");
//const reduxSaga = require("redux-saga");
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
//const createSagaMiddleware = reduxSaga.default;
const sagaMiddleware = createSagaMiddleware();

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = () => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = () => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

function* fetchUsers() {
  try {
    yield put(fetchUsersRequest());
    const users = yield call(() => {
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          response.data;
        });
    });

    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersFailure(e));
  }
}

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
sagaMiddleware.run(fetchUsers);
