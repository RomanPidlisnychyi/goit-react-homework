export default {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: 'api_key=3ca4f0fa98e22b27d06819a16b26fd68',
    getTrending() {
        return fetch(`${this.baseURL}trending/all/day?${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    },
    getFilmById(id) {
        return fetch(`${this.baseURL}movie/${id}?${this.apiKey}`)
            .then(response => response.json())
            .then(data => data);
    },
    getSearch(query) {
        return fetch(
            `${this.baseURL}search/movie?${this.apiKey}&query=${query}`,
        )
            .then(response => response.json())
            .then(data => data.results);
    },
    getCredits(id) {
        return fetch(`${this.baseURL}movie/${id}/credits?${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.cast);
    },
    getReviews(id) {
        return fetch(`${this.baseURL}movie/${id}/reviews?${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    },
};
