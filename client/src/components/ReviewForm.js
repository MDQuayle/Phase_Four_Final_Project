import {useState} from 'react'
function ReviewForm({id}) {
    const [title, setTitle] = useState([]) 
    const [content, setContent] = useState([]) 
        function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/movies/${id}/reviews`, {
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
        <form onSubmit={handleSubmit}>
          
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          
            <label htmlFor="content">Review:</label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoComplete="off"
            />

          </form>
      )
}

export default ReviewForm;