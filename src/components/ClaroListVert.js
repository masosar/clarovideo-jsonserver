import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "./api/movies";

const ClaroList = () => {
  const { list: movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div className="clarovideo-vertical-wrapper-grid" data-testid="gridpeliculas">
      {movies.map((movie, index) => (
        <div key={index} className="clarovideo-vertical-card-container">
          <img
            src={movie.image_medium}
            alt={movie.title}
            className="clarovideo-vertical-banner-img"
          />
        </div>
      ))}
    </div>
  );
};

export default ClaroList;
