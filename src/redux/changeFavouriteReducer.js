import {Type} from "./actions";

const changeFavouriteReducer = (jokes, action) => {
    if (jokes === undefined) {
        jokes = JSON.parse(localStorage.getItem("jokes")) || [];
    }
    let newJokes;
    switch (action.type) {
        case Type.ADD_JOKE:
            newJokes = [...jokes, action.payload];
            localStorage.setItem("jokes", JSON.stringify(newJokes));
            return newJokes;
        case Type.DELETE_JOKE:
            newJokes = jokes.filter(joke => joke.id !== action.payload);
            localStorage.setItem("jokes", JSON.stringify(newJokes));
            return newJokes;
        default:
            return jokes;
    }
};

export default changeFavouriteReducer;