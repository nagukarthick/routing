import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/jobs?search=${search}`);
  };

  return (
    <div className="home">
      <div className="left">
        <button>Build Your Future With Us</button>
        <h1>Make Your Dream With Jobify </h1>

        <p>Search thousands of jobs easily</p>
        <div className="left-box">
          <input
            type="text"
            placeholder="Search jobs (React, Frontend...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Home;
