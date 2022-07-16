import {SET_SORT} from "../actionTypes";


const initialState = {
    field: null,
    order: "ASC"
};

const visibilitySort = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: {
            return {field: action.payload.sort.field, order: state.order === "ASC" ? "DESC" : "ASC"};
        }

        default: {
            return state;
        }
    }
};

export default visibilitySort;
