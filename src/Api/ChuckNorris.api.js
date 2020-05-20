import axios from "axios";

const baseURL = "https://api.chucknorris.io/jokes";
const countLimit = 50;

const filterJoke = joke => ({
    updated_at: joke.updated_at,
    id: joke.id,
    url: joke.url,
    value: joke.value,
    categories: joke.categories,
});

const getRandom = async () => {
    const url = `${baseURL}/random`;
    const res = await axios.get(url);
    return [filterJoke(res.data)];
};

const getCategories = async () => {
    const url = `${baseURL}/categories`;
    const res = await axios.get(url);
    return res.data;
};

const getByCategory = async (category) => {
    const url = `${baseURL}/random?category=${category}`;
    const res = await axios.get(url);
    return [filterJoke(res.data)];
};

const getByQuery = async (query) => {
    const url = `${baseURL}/search?query=${query}`;
    try {
        const res = await axios.get(url);
        return res.data.result.slice(0, countLimit).map(joke => filterJoke(joke));
    } catch (e) {
        return [];
    }
};

export default {getRandom, getCategories, getByCategory, getByQuery};