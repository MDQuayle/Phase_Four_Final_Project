import { useEffect, useState } from 'react'
// import {BrowserRouter as Route, Routes} from 'react-router-dom';
import '../App.css';
import Header from './Header.js';
import LogIn from './LogIn.js';
import MovieList from './MovieList.js';
function App() {
  const [movies, setMovies] = useState([]) 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user){
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }



  useEffect(() => {
    fetch('/movies')
    .then(res=> res.json())
    .then(movieData => setMovies(movieData))
  },[])

  return (
    <div className="App">
      <header className="App-header">
      <Header user={user} onLogout={handleLogout}/>
        {/* <Routes>
          <Route exact path="/login" element={<LogIn onLogin={handleLogin} />} />
          <Route path="/" element={<MovieList movies={movies}/>} />
        </Routes> */}
        <MovieList movies={movies}/>
        <LogIn onLogin={handleLogin} />
      </header>
    </div>
  );
}

export default App;
