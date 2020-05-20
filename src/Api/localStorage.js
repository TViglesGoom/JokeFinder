const get = (query) => {
    return JSON.parse(localStorage.getItem(query));
}

const set = (query, obj) => {
    localStorage.setItem(query, JSON.stringify(obj));
}

export {get, set};