import {
    LOAD_PRODUCT,
    SAVE_PRODUCT,
    GET_PRODUCT,
    SET_ALERT,
} from '../actions'

const INITIAL_STATE = {
    data: []
}

export default function usersReducer(state = INITIAL_STATE.data, action) {
    const { type, payload } = action

    switch (type) {
        case 'FETCH_START':
            return {
                ...state,
                loading : true
            }
        case 'FETCH_STOP':
            return {
                ...state,
                loading : false
            }
        case SET_ALERT:
            return {
                ...state,
                alert : payload
            }
        case SAVE_PRODUCT:
            return {
                ...state,
                list : [payload]
            }
        case GET_PRODUCT:
            return {
                ...state,
                detail : payload
            }
        case LOAD_PRODUCT:
            return {
                ...state,
                list : payload,
                alert : null,
                loading : null
            }
        default:
            return state
    }
}
