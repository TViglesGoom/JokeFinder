import {Type} from "./actions";

const jokesLoadedReducer = (loaded=false, action) => {
    switch (action.type) {
        case Type.JOKES_LOADED:
            return action.payload;
        default:
            return loaded;
    }
};

export default jokesLoadedReducer;