import ReviewForm from './ReviewForm.js'
import ReviewCard from './ReviewCard.js'
function MovieCard({movie, id}) {
    
    return(
        <div>
            <h4>{movie.title}</h4>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Summary: {movie.summary}</p>
            <p>Release Year: {movie.release_year}</p>
            {/* <ReviewCard id={id}/>
            <ReviewForm id={id}/> */}
        </div>
        )
}

export default MovieCard;