function ReviewCard({review, user}){
    return(
            <div>
                <h4>{review.title}</h4>
                <p>{user.username}</p>
                <p>{review.content}</p>
            </div>
            )
    }
export default ReviewCard;