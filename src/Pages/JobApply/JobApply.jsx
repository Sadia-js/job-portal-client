import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    console.log(id, user);
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkdin, github, resume)
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkdin,
            github,
            resume
        }
        console.log(jobApplication)
        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });       
                      navigate("/myApplications");               
                }
            })
    }
    return (

        <div className="card bg-base-100 w-full shadow-lg border my-10">
            <h1 className="text-3xl font-bold text-center mt-4">Apply Job and good Luck!</h1>
            <form onSubmit={handleFormSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkdin URL</span>
                    </label>
                    <input type="url" name="linkdin" placeholder="Linkdin URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply here</button>
                </div>
            </form>
        </div>

    );
};

export default JobApply;