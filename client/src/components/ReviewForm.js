import {useState} from 'react'
function ReviewForm({id, newReview}) {
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("") 
        function handleSubmit(e) {
        e.preventDefault()
        setTitle("")
        setContent("")
        fetch(`http://localhost:3000/movies/${id}/reviews`, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            title,
            content})
          })
        .then(res => res.json())
        .then((review) => newReview(review))
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