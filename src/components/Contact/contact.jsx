import React from 'react';
import {withRouter} from 'react-router-dom'
import data from '../../data/data_val';
import CompWrapper from '../Wrapper/CompWrapper';

const Contact = ({history}) => (
    <CompWrapper>
        <div className="card">
            <div className="card-header">
                <h3>Contact Me!</h3>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item"><b><i>GitHub:</i></b> {data.github}</li>
                    <li className="list-group-item"><b><i>LinkedIn:</i></b> {data.linkedin}</li>
                    <li className="list-group-item"><b><i>Email:</i></b> {data.mail}</li>
                    <li className="list-group-item"><b><i>Phone:</i></b> {data.phone}</li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={history.goBack}>
                    Go Back
                </button>
            </div>
        </div>
    </CompWrapper>
)

export default withRouter(Contact);