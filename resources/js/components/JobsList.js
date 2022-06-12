import React from "react";
import Axios from "axios";
import Data from "./Data";
import HomeData from "./HomeData";

class JobsList extends React.Component {
    state = {
        jobs: [],
        loading: true,
    }

    onFetchJobs = async () => {
        const res = await Axios.get("/job");
        if(res.data.status === 200){
            this.setState({jobs: res.data.jobs});
            this.setState({loading: false});
        }
    }
    componentDidMount(){
        this.onFetchJobs();
    }

    onDeleteJob = async (id) => {
        const res = await Axios.delete(`/job/${id}`);
        if(res.data.status === 200){
            this.onFetchJobs();
        }
    }

    render(){
        console.log("----------------");
        if(this.state.loading){
            return <h1>Loading....</h1>
        }
        if(window.location.href === window.origin + "/list"){
            return(
                <div>
                    {this.state.jobs.map(job => (
                        <Data job = {job} key={job.id} deleteJob = {this.onDeleteJob}/>
                    ))}
                </div>
            )
        }
        return(
            <div>
                {this.state.jobs.map(job => (
                    <HomeData job = {job} key={job.id}/>
                ))}
            </div>
        )
    }
}

export default JobsList;
