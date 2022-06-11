import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import Rightbar from "./Rightbar";

class PostJob extends React.Component {
    state = {
        title: '',
        type: '',
        description: '',
        logo: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSaveJob = async (e) => {
        e.preventDefault();
        const res = await axios.post("/job", this.state);
        if(res.data.status === 200){
            this.props.history.push("/list");
        }
    }

    render(){
        return(
            <div className="layout">
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.onSaveJob}>
                            <div className="form-group">
                                <label className="top">Title:</label>
                                <input type="text" name="title" className="form-control highlight"
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" value={this.state.type} onChange={this.handleInput} required>
                                    <option value="Technology">Technology</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Creativity">Creativity</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" name="description" className="form-control highlight" value={this.state.description} onChange={this.handleInput} placeholder="Write the Description" required/>
                            </div>
                            <button type="submit" className="primary">
                                <FontAwesomeIcon icon="plus" className="icon"/>
                                Post a Job
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostJob;
