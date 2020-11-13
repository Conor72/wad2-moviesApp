class StubAPI {
    constructor() {
        this.watchListMovies = [];
    }

    add(movie) {
        this.watchListMovies.push(movie);
    }

    getAll() {
        return this.watchListMovies;
    }


}

export default new StubAPI();