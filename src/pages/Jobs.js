import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import jobs from "../data/jobsData";

function Jobs() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search") || "";

  const [search, setSearch] = useState(searchQuery);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Available Jobs</h2>

      <input
        type="text"
        placeholder="Search job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <Link to={`/jobs/${job.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Jobs;
