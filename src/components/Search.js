import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const handleChange = (qtext) => {
    setText(qtext);
    // getQuery(qtext);
  };
  return (
    <section className="buscar--wrapper">
      <div className="searchIcon"></div>
      <div>
        <form className="buscar--form">
          <div className="buscar--input-wrapper">
            <input
              type="text"
              className="buscar--input"
              placeholder="Busqueda de película"
              value={text}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
