function ReviewCard({review}){
    return(
            <div>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
            </div>
            )
    }
export default ReviewCard;