import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';


const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
            <h2 className='text-5xl'>Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opprtunities with all the information you need. Its your future.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              {
                jobs.map(job => <Job job={job} key={job.key}></Job>)
              }
            </div>
        </div>
    );
};

export default FeaturedJobs;