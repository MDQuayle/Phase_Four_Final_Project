import ReviewForm from './ReviewForm.js'
import ReviewList from './ReviewList.js'
function MovieCard({movie, id, user}) {
    
    return(
        <div>
            <h4>{movie.title}</h4>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Summary: {movie.summary}</p>
            <p>Release Year: {movie.release_year}</p>
            <ReviewList id={id} user={user}/>
            <ReviewForm id={id}/>
        </div>
        )
}

export default MovieCard;