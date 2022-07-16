import {SET_FILTER} from "../actionTypes";


const initialState = {
    filter: "all",
    // field:null,
    // order:"ASC"
};

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {...state, filter: action.payload.filter};
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
