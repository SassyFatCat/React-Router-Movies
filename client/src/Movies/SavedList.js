import React from 'react';
import {useHistory, Link} from 'react-router-dom'

const SavedList = props => {
const history = useHistory();

return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <Link to={`/movies/${movie.id}`} onClick={history.push(`/movies/${movie.id}`)} key={index} className="saved-movie">{movie.title}</Link>

      // <span onClick={() => {
      //   history.push(`/movies/${movie.id}`)
      // }} key={index} className="saved-movie">{movie.title}</span>
    ))}
    <div onClick={() => history.push('/')} className="home-button">Home</div>
  </div>
)
};

export default SavedList;
