interface Show {
    id: number,
    title: string,
    name: string,
    adult: boolean,
    genre_ids: number[]
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    isCols: boolean;
    manual_type: string;
    media_type: string;
}

interface TrendingMovies extends Movie {
    searchTerm: string;
    movie_id: number;
    count: number

}

