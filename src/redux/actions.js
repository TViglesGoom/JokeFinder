export const Type = {
    ADD_JOKE: "ADD_JOKE",
    DELETE_JOKE: "DELETE_JOKE",
    RESET_JOKES: "RESET_JOKES",
    JOKES_LOADED: "JOKES_LOADED",
};

export const addJoke = joke => ({
    type: Type.ADD_JOKE,
    payload: joke,
});

export const deleteJoke = jokeId => ({
    type: Type.DELETE_JOKE,
    payload: jokeId,
});

export const resetJokes = jokes => ({
    type: Type.RESET_JOKES,
    payload: jokes,
});

export const jokesLoaded = isLoaded => ({
    type: Type.JOKES_LOADED,
    payload: isLoaded,
})