import { useEffect, useState } from "react"
import ReviewCard from './ReviewCard.js'
function ReviewList({user, id}){
const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`/movies/${id}`)
        .then(res=> res.json())
        .then(singlemovieData => setReviews(singlemovieData.reviews))
      },[])
      
      const allReviews = reviews.map((review) => <ReviewCard key = {review.id} id={review.id} review={review} user={user}/> )
    
 return (
    <div>
        {allReviews}
    </div>
 )   
    
    
    
    
}

export default ReviewList