import React from "react";
import JobsList from "./JobsList";
import Rightbar from "./Rightbar";

class Dashboard extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="jobs-div">
                    <JobsList />
                </div>
                {/* <Rightbar /> */}
            </div>
        )
    }
}

export default Dashboard;
