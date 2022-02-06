import { useEffect, useState } from "react"
import ReviewCard from './ReviewCard.js'
import ReviewForm from './ReviewForm.js'
function ReviewList({user, id}){
const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`/movies/${id}/reviews`)
        .then(res=> res.json())
        .then(reviews => setReviews(reviews))
      },[])

    
    function newReview(newReview){
        setReviews([...reviews, newReview])
    }
      
      const allReviews = reviews.map((review) => <ReviewCard key = {review.id} id={review.id} review={review}/> )
    
 return (
    <div>
        <h2>Reviews:</h2>
        {allReviews}
        <ReviewForm id = {id} newReview = {newReview}/>
    </div>
 )   
    
    
    
    
}

export default ReviewList