import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-10 grid s:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-4">
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;