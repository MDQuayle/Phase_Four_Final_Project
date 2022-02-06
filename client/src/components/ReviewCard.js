import { useState } from "react"
function ReviewCard({review, onReviewDelete, id}){
    const [likes, setLikes] = useState(review.likes)
    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
          method: "DELETE",
        });
    
        onReviewDelete(id);
      }
      function handleLikeClick(){
        fetch(`reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({likes: review.likes +1 }),
            })
        setLikes(likes+1)

      }
    return(
            <div>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
                <button onClick={handleDeleteClick}>Delete Review</button>
                <button onClick={handleLikeClick}>Likes: {likes}</button>
            </div>
            )
    }
export default ReviewCard;