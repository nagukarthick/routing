import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/jobsData";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <h2>Job Not Found</h2>;

  return (
    <div className="details">
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Type:</strong> {job.type}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
      <button>Save Job</button>
    </div>
  );
}

export default JobDetails;
