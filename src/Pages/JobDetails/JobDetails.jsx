import { BiDollar } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const detailsLoad = useLoaderData();
    const { _id, category, status, salaryRange, description, company, applicationDeadline, company_logo, title, location, jobType, requirements, } = detailsLoad;
    return (
        <div className="border rounded-md p-4">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div>
                        <img src={company_logo} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{company}</p>
                        <p className="flex items-center gap-1 pt-2">
                            <IoLocationOutline />{location}</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap text-center items-center">
                    {
                        requirements.map(skill => <p className="border text-sm rounded-md hover:bg-blue-600 hover:text-white p-2 bg-gray-200">
                            {skill}</p>
                        )
                    }
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold pt-4">{title}</p>
                <p className="flex justify-between">
                    <span>{category}</span>
                    <span>
                        {applicationDeadline}
                    </span>
                </p>
            </div>
            <p className="py-3">
                {description}
            </p>
            <div className="flex justify-between">
                <p className="flex items-center"><BiDollar /> {salaryRange.min} - {salaryRange.max} /<sub>Month</sub></p>
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn">Apply now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;