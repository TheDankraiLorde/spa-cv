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
                <p>GitHub: {data.github}</p>
                <p>LinkedIn: {data.linkedin}</p>
                <p>Email: {data.mail}</p>
                <p>Phone: {data.phone}</p>
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