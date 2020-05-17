import axios from "axios";

const baseURL = "https://api.chucknorris.io/jokes";

const filterJoke = joke => ({
    updated_at: joke.updated_at,
    id: joke.id,
    url: joke.url,
    value: joke.value,
    categories: joke.categories,
});

const getRandom = () => {
    const url = `${baseURL}/random`;
    return axios
        .get(url)
        .then(res => res.data)
        .then(res => [filterJoke(res)]);
};

const getCategories = () => {
    const url = `${baseURL}/categories`;
    return axios
        .get(url)
        .then(res => res.data);
};

const getByCategory = (category) => {
    const url = `${baseURL}/random?category=${category}`;
    return axios
        .get(url)
        .then(res => res.data)
        .then(res => [filterJoke(res)]);
};

const getByQuery = (query) => {
    const url = `${baseURL}/search?query=${query}`;
    return axios
        .get(url)
        .then(res => res.data.result)
        .then(res => res.map(joke => filterJoke(joke)));
};

export default {getRandom, getCategories, getByCategory, getByQuery};