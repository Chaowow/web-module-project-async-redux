import { FETCH_FACT_START, FETCH_FACT_SUCCESS, FETCH_FACT_FAILURE } from "../action/catActions";

const initialState = {
    catFact: {},
    error: '',
    isFetching: false
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FACT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_FACT_SUCCESS:
            return {
                ...state,
                catFact: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FACT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;