import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomeData extends React.Component {

    render(){
        const {jobs} = this.props;
        return(
            <div className="card job">
                <div className="cardHeader">
                    <div className="type">{jobs.type}</div>
                    <p className="cardTitle">{jobs.title}</p>
                    <div className="subinfo">
                        <h6>
                            {moment(jobs.updated_at).format('LLL')}
                        </h6>
                        <div></div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{jobs.description}</p>
                </div>
            </div>
        )
    }
}

export default HomeData;
