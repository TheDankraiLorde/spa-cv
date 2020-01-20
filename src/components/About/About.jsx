import React from 'react';
import './about.css';
import data from '../../data/data_val'
import { withRouter } from 'react-router-dom';

const About = ({history}) => (
    <div className="about">
        <div className="card">
            <div className="card-header"><h1>About</h1></div>
            <div className="card-body">
                Experience: {`${data.experience.years} years and ${data.experience.months} months`}
                <br/><br/>
                {data.about}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={history.goBack}>
                    Go Back
                </button>
            </div> 
        </div>
    </div>
);

export default withRouter(About);