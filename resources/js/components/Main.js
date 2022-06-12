import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Dashboard from "./Dashboard";
import PostJob from "./PostJob";
import EditJob from "./EditJob";
import Navbar from "./navbar";
import "./fontawesome";
import "../../css/app.css";

function Main() {
    return (
        <Router>
        <>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/list" exact component={Dashboard} />
            <Route path="/postjob" exact component={PostJob} />
            <Route path="/etjob/:id" exact component={EditJob} />
        </Switch>
        </>
        </Router>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
