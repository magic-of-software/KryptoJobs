import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import Rightbar from "./Rightbar";

class EditJob extends React.Component {
    state = {
        title: '',
        type: '',
        description: '',
        logo: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onUpdateJob = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/job/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/list");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/job/${id}/edit`);
        this.setState({title: res.data.Job.title});
        this.setState({type: res.data.Job.type});
        this.setState({description: res.data.Job.description});
        this.setState({logo: res.data.Job.logo});
    }

    render(){
        return(
            <div className="layout">

                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.onUpdateJob}>
                            <div className="form-group">
                                <label className="top">Title:</label>
                                <input type="text" name="title" className="form-control highlight"
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight"
                                value={this.state.type} onChange={this.handleInput}
                                required>
                                    <option value="Technology">Technology</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Creativity">Creativity</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" name="description" className="form-control highlight"
                                value={this.state.description} onChange={this.handleInput}
                                placeholder="Write the Description" required/>
                            </div>
                            <button type="submit" className="primary">
                                <FontAwesomeIcon icon="plus" className="icon"/>
                                Edit Job
                            </button>
                        </form>
                    </div>
                </div>
                {/* <Rightbar /> */}
            </div>
        )
    }
}

export default EditJob;
