import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomeData extends React.Component {

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
                        <div></div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{job.description}</p>
                </div>
            </div>
        )
    }
}

export default HomeData;
