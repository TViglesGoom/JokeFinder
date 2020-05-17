import changeFavouriteReducer from "./changeFavouriteReducer";
import resetJokesReducer from "./resetJokesReducer";
import jokesLoadedReducer from "./jokesLoadedReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    favouriteJokes: changeFavouriteReducer,
    jokes: resetJokesReducer,
    jokesLoaded: jokesLoadedReducer,
});

const store = createStore(rootReducer);

export default store;