import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "./api/movies";
import { Link } from "react-router-dom";

const ClaroList = () => {
  const { list: movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div className="clarovideo-wrapper-grid" data-testid="gridpeliculas">
      {movies.map((movie, index) => (
        <div key={index} className="clarovideo-card-container">
          <Link
              to={{
                pathname: `/detail/${movie.id}`,
                state: { movies: movie }
              }}
            >
          <img
            src={movie.image_small}
            alt={movie.title}
            className="clarovideo-banner-img"
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClaroList;
