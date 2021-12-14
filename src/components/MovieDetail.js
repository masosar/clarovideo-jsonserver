import React from 'react'
import { useLocation, Link } from "react-router-dom";

const MovieDetail = () => {

    const { state } = useLocation();

    return (
        <div className="clarovideo-wrapper-detail">
            <div className="clarovideo-detail-title">{state.movies.id}{" "} {state.movies.title}{" "}</div>
            <div className="clarovideo-detail-content">
                <div className="clarovideo-detail-content-bigimage">
                    <img src={state.movies.image_large} alt="movie_image" />
                </div>
                <div className="clarovideo-detail-content-data">
                    <ul>
                        <li className='title-original'>{state.movies.title_original}{" "}</li>
                        <li>{state.movies.description_large}{" "}</li>
                        <li>Cast</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
