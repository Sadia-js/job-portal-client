import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
        const { min, max, currency, ...newjob } = formObject;
        console.log(newjob);
        newjob.salaryRange = { min, max, currency };
        newjob.requirements = newjob.requirements.split("\n");
        newjob.responsibilities = newjob.responsibilities.split("\n");
        console.log(newjob);
        // send newJob to db
        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newjob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/myPostedJobs");
                }
            })
    }
    return (
        <div className="my-10">
            <h1>Add a new job</h1>
            <form onSubmit={handleAddJob} className="card-body border">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="companyName" placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* Application deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application deadline</span>
                    </label>
                    <input type="date" name="deadline" placeholder=" Application deadline" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description" required></textarea>
                </div>
                <div className="grid md:grid-cols-2 md:gap-4">                {/* HR Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" placeholder="HR Name" name="hr_name" className="input input-bordered" required />
                    </div>
                    {/* HR Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="text" name="hr_email" placeholder="HR Email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                </div>
                {/* salaray range */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end md:gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue="Currency" name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>USD</option>
                            <option>Euro</option>
                            <option>BDT</option>
                        </select>
                    </div>
                </div>
                {/* job field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name="jobField" defaultValue="Pick a Job Field" className="select w-full max-w-xs">
                        <option disabled>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name="jobType" defaultValue="Pick a Job Type" className="select w-full max-w-xs">
                        <option disabled>Pick a Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Intern</option>
                    </select>
                </div>
                {/* Job Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each Job Responsibilities in a new line" name="responsibilities" required></textarea>
                </div>
                {/* Job Requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each Job Requirements in a new line" name="requirements" required></textarea>
                </div>
                {/* Compnay logo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Compnay logo url</span>
                    </label>
                    <input type="url" name="logoURL" placeholder="Compnay logo url" className="input input-bordered" required />
                </div>
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;