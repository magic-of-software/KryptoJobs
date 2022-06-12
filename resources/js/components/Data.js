import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Data extends React.Component {
    onDeleteJob = (id) => {
        var con = confirm("Do you want to delete this job?");
        if(con == true){
            this.props.deleteJob(id);
        }
    }
    render(){
        const {job} = this.props;
        return(
            <div className="card job">
                <div className="cardHeader">
                    <div className="type">{job.type}</div>
                    <p className="cardTitle">{job.title}</p>
                    <div className="subinfo">
                        <h6>
                            {moment(job.updated_at).format('LLL')}
                        </h6>
                        <div className="action">
                            <p className="edit"><Link to={`/etjob/${job.id}`}><FontAwesomeIcon icon="edit" className="icon"/>Edit</Link></p>
                            <p className="delete" onClick={() => this.onDeleteJob(job.id)}><FontAwesomeIcon icon="trash-alt" className="icon"/>Delete</p>
                        </div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{job.description}</p>
                </div>
            </div>
        )
    }
}

export default Data;
