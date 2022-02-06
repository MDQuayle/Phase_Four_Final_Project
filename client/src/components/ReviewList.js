import { useEffect, useState } from "react"
import ReviewCard from './ReviewCard.js'
import ReviewForm from './ReviewForm.js'
function ReviewList({id}){
const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`/movies/${id}/reviews`)
        .then(res=> res.json())
        .then(reviews => setReviews(reviews))
      },[])

    
    function newReview(newReview){
        setReviews([...reviews, newReview])
    }
    function onReviewDelete(id) {
      const updatedReviews = reviews.filter((review) => review.id !== id);
      setReviews(updatedReviews);
    }
      
      const allReviews = reviews.map((review) => <ReviewCard key = {review.id} id={review.id} review={review} onReviewDelete={onReviewDelete}/> )
    
 return (
    <div>
        <h2>Reviews:</h2>
        {allReviews}
        <ReviewForm id = {id} newReview = {newReview}/>
    </div>
 )   
    
    
    
    
}

export default ReviewList