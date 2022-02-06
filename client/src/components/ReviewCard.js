function ReviewCard({review, user}){
    return(
            <div>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
                <p>User: {user.username}</p>
            </div>
            )
    }
export default ReviewCard;