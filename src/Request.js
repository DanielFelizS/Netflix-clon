const Key = 'f42106ce15fc39f1503f45157c46c1dd';

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${Key}&language=en-US`
}

export default request