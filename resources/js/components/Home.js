import React from "react";
// import Rightbar from "./Rightbar";
import Dashboard from "./Dashboard";

class Home extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="job-div">
                    <Dashboard />
                </div>
                {/* <Rightbar /> */}
            </div>
        )
    }
}

export default Home;
