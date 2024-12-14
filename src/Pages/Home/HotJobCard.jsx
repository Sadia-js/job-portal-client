import { IoLocationOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
    const { _id, category, description, company, company_logo, title, applicationDeadline, location, jobType, requirements, salaryRange
    } = job;
    const handleDetailsPage = (id) => {
        console.log(id)
    }
    return (
        <div className="card card-compact shadow">
            <div className="flex items-start mt-2 gap-2">
                <figure>
                    <img className=""
                        src={company_logo}
                        alt={company} />
                </figure>
                <div>
                    <h4 className="text-xl font-semibold">{company}</h4>
                    <p className="flex items-center gap-1">
                        <IoLocationOutline />
                        <span className="text-sm text-gray-500">{location}</span>
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <Link to={`/jobs/${_id}`}>
                    <p onClick={()=>handleDetailsPage(_id)} className="text-blue-600 hover:underline">{description}</p>
                </Link>
                <div className="flex gap-2 flex-wrap text-center">
                    {
                        requirements.map(skill => <p className="border p-1 text-sm rounded-md hover:bg-blue-600 hover:text-white">
                            {skill}</p>
                        )
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className="flex items-center">Salary : <BiDollar /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-sm btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;