import ActionTypes from '../constants/action-types'

const initialState = {word: ''};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.TESTING:
      return {...state, ...action.payload};
    default:
      return state;
  }
}