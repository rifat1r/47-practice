import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    return (
        <div>
            <h2>Job Details of : </h2>
        </div>
    );
};

export default JobDetails;