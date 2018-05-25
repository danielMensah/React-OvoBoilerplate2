import ActionTypes from '../constants/action-types';

export function testAction() {
  return (dispatch) => {
        dispatch({
            type: ActionTypes.TESTING,
            payload: {word: 'Hello World'}
        });
    }
}