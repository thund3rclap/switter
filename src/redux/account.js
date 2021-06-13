import * as ActionTypes from "./types";

const initialState = {
    id: 0,
    name: "",
    imgUrl: "",
};

export const account = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ACCOUNT_SET_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
