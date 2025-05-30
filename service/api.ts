const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`
    }
}

const fetching = async (endpointUrl: string)=>{
    const res = await fetch(`${TMDB_CONFIG.BASE_URL}${endpointUrl}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!res.ok) throw new Error(`Failed to fetch data ${res.statusText}`)
    const data = await res.json();
    return await data.results;
}
export const fetchData = async ({query}: {query?: string}) => {
    let data: any = {};
    if (query) {
    // Fetch pages 1–3 in parallel for speed
    const pages = [1, 2, 3, 4, 5].map((page) =>
      fetching(`/search/multi?query=${encodeURIComponent(query)}&page=${page}`)
    );
    // Wait for all three
    const resultsArrays = await Promise.all(pages);
    // Flatten into a single array of items
    const combined = resultsArrays.flat();
    data = combined;
    
    }else{
        const fetchTrendingMovies = await fetching('/trending/movie/week');
        const fetchTrendingTvShows = await fetching('/trending/tv/week');
        const fetchTopRatedMovies = await fetching('/discover/movie?language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200');
        const fetchTopRatedTvShows = await fetching('/discover/tv?language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200');
        const fetchUpComming = await fetching('/discover/movie?year=2026');
        data = {
            trendingMovies: fetchTrendingMovies,
            trendingTvShows: fetchTrendingTvShows,
            topRatedMovies: fetchTopRatedMovies,
            topRatedTvShows: fetchTopRatedTvShows,
            upComming: fetchUpComming
        }
    }
 
    return data
}