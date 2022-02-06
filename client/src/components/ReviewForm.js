import {useState} from 'react'
function ReviewForm({id, newReview}) {
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("") 
    const formValues = {
        title: title,
        content: content,
        movie_id: id,
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => response.json())
          .then((review) => newReview(review));
          setTitle("")
          setContent("")
      }
    
      return (
        <>
        <h4>Add Your Review</h4>
        <form onSubmit={handleSubmit}>
          
            <label>Review Title:</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <p>
            <label>Review:</label>
            <input className="content"
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoComplete="off"
            />
            </p>
            <input type="submit" value="Submit" />

          </form>
          </>
      )
}

export default ReviewForm;