import {Type} from "./actions";
import * as lg from "../Api/localStorage";

const changeFavouriteReducer = (jokes, action) => {
    if (jokes === undefined) {
        jokes = lg.get("jokes") || [];
    }
    let newJokes;
    switch (action.type) {
        case Type.ADD_JOKE:
            newJokes = [...jokes, action.payload];
            lg.set("jokes", newJokes);
            return newJokes;
        case Type.DELETE_JOKE:
            newJokes = jokes.filter(joke => joke.id !== action.payload);
            lg.set("jokes", newJokes);
            return newJokes;
        default:
            return jokes;
    }
};

export default changeFavouriteReducer;