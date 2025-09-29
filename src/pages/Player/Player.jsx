import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjNjZmFmNTk2YjhmYTg4NWQ2NjhkZThmMzRjNTc2NiIsIm5iZiI6MTc1ODIyODUyOS44NTYsInN1YiI6IjY4Y2M3MDMxZDA5MWExNGVjNDE0OTJjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2P9b2ymVIasogH6XkM4QJ1PTPGMpraMeZw7PT8Sx4M0'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
}, [])



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width="90%" height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title="trailer" frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
