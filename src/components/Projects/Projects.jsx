import React from 'react';
import {withRouter} from 'react-router-dom';

import CompWrapper from '../Wrapper/CompWrapper';

import projects from '../../data/projects'

const Projects = ({history}) => (
    <CompWrapper>
        <div className="card">
            <div className="card-header">
                <h2>Previous Experience</h2>
            </div>
            <div className="card-body">
                {
                    projects.map((item,i)=> (
                        <div className="card" key={i}>
                            <div className="card-header">
                                <h5>{item.project}</h5>
                            </div>
                            <div className="card-body">
                                <strong>
                                    <p>
                                        Description:
                                    </p>
                                </strong>
                                <p>{item.employer_desc}</p>
                                <p><strong>Roles and Responsibilities: </strong></p>
                                <ul class="list-group">
                                {
                                    item.roles.map((role,r_no) => (
                                        <li className="list-group-item" key={r_no}>
                                            {role}
                                        </li>                            
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={history.goBack}>
                    Go Back
                </button>  
            </div>
        </div>
    </CompWrapper>
)

export default withRouter(Projects);