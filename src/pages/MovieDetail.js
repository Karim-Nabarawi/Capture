import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

import ScrollTop from "../components/ScrollTop";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = ({}) => {
  const history = useHistory();
  const url = history.location.pathname;

  //State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.find((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className="details">
          <div className="headLine">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} key={award.title} />
            ))}
          </div>
          <div className="imgSecondary">
            <img src={movie.secondaryImg} alt="movie2" />
          </div>
          <ScrollTop />
        </motion.div>
      )}
    </>
  );
};

//Utility
const Award = ({ title, description }) => {
  return (
    <div className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetail;
