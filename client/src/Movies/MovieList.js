import React from 'react';
import {useHistory} from 'react-router-dom'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <MovieDetails key={index} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, id } = movie;
const history = useHistory();
const routeToMovie = () => {
  history.push(`/movies/${id}`)
}
  return (
    <div onClick={routeToMovie} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
