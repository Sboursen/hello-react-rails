import getGreetingsFromApi from './api';

const FETCH_SUCCESS = 'HELLO-RAILS-REACT/greetings/FETCH_SUCCESSFUL';
const FETCH_FAILED = 'HELLO-RAILS-REACT/greetings/FETCH_FAILED';

const GET_GREETINGS_REQUEST = 'HELLO-RAILS-REACT/greetings/GET_REQUEST';
const GET_GREETINGS_SUCCESS = 'HELLO-RAILS-REACT/greetings/GET_SUCCESS';
const GET_GREETINGS_FAILURE = 'HELLO-RAILS-REACT/greetings/GET_FAILURE';

const initialState = {
  loading: false,
  greeting: {},
  error: '',
};

// GET greeting action creators
export function getGreetingRequest() {
  return {
    type: GET_GREETINGS_REQUEST,
  };
}

export function getGreetingSuccess(greeting) {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: greeting,
  };
}

export function getGreetingFailure(error) {
  return {
    type: GET_GREETINGS_FAILURE,
    payload: error,
  };
}

export function getGreeting() {
  return (dispatch) => {
    dispatch(getGreetingRequest());
    getGreetingsFromApi()
      .then((greeting) => {
        dispatch(getGreetingSuccess(greeting));
      })
      .catch((error) => {
        dispatch(getGreetingFailure(error.message));
      });
  };
}


// Missions reducer
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS_REQUEST:
      return { ...state, loading: true };

    case GET_GREETINGS_SUCCESS:
      return {
        loading: false,
        greeting: action.payload,
        error: '',
      };

    case GET_GREETINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default greetingsReducer;
