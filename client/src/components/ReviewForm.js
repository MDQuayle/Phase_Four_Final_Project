import {useState} from 'react'
function ReviewForm({id}) {
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("") 
        function handleSubmit(e) {
        e.preventDefault();
        fetch(`/movies/${id}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
          }),
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

          </form>
          </>
      )
}

export default ReviewForm;