import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { div } from "motion/react-client";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs)
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user?.email])
    return (
        <div>
            <h1>My Posted Job : ({jobs.length})</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Deadline</th>
                            <th>Total Applications</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className="btn btn-link">View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;