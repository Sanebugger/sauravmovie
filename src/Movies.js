import React from 'react';
import { useGlobalContext } from './Context';

export default function Movies() {

  const { movie } = useGlobalContext();
  return (
    <>
      {/* <div>Movies</div> */}
      {movie.map((curMovieElem) => {
        return (
          <>
          <h2>{curMovieElem.Title}</h2>
          </>
        )
      })}
    </>
  )
}
