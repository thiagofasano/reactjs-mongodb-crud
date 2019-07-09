import React, { Component } from 'react';
import Actions from './../components/Actions';
import axios from 'axios';

import './../assets/css/Project.css';

class Project extends Component {

    state = {
        projects: []
    }

    async componentDidMount(){
        const projectsList = await axios.get(`http://localhost:3333/project`);
        this.setState({ projects: projectsList.data });
    }

    render(){
        return(
            <div id="listProjects">

                <h1 className="title">List</h1>
                                
                <ul>
                
                { this.state.projects.map(project => 
                   <Actions project={project} key={project._id} />
                )}
                
                </ul>             
                
                
            </div>
        );
    }

}

export default Project;