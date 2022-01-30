import MovieCard from './MovieCard.js'
function MovieList({movies}) {
    const allMovies = movies.map((movie) => <MovieCard key = {movie.id} id={movie.id} movie={movie}/> )
    return(
    <div>
        {allMovies}
    </div>
    )
}

export default MovieList;