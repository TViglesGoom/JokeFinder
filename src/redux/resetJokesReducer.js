import {Type} from "./actions";

const resetJokesReducer = (jokes=[], action) => {
    switch (action.type) {
        case Type.RESET_JOKES:
            return action.payload;
        default:
            return jokes;
    }
};

export default resetJokesReducer;