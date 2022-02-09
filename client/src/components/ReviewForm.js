import {useState} from 'react'
function ReviewForm({id, newReview}) {
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("") 
    const[errors, setErrors] = useState("")
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
        .then((response) => {
          if (response.ok) {
            response.json().then((review) => {
              setTitle("");
              setContent("");
              setErrors([]);
              newReview(review);
            });
          } else {
          setErrors("Invalid Entry. Please include a title and at least 10 characters for your review");
          }
        });
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
              <p style={{ color: "red" }}>
                {errors}
              </p>
          </form>
          </>
      )
}

export default ReviewForm;