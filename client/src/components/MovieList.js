import MovieCard from './MovieCard.js'
function MovieList({movies, user}) {
    const allMovies = movies.map((movie) => <MovieCard key = {movie.id} id={movie.id} movie={movie} user={user}/> )
    return(
    <div>
        {allMovies}
    </div>
    )
}

export default MovieList;