

import * as Actions from '../actions';
const initialState = {
    userInfo:{},
};
export default function stateContent(state = initialState, action = {}) {
    switch (action.type) {
        case Actions.userInfo:
            return {
                ...state,
                userInfo:{...action.payload}
            }
    }
    
    return state
}