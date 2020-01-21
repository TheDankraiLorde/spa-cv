import React from 'react'
import './education.css'
import {withRouter} from 'react-router-dom';
import edu from '../../data/education';
import CompWrapper from '../Wrapper/CompWrapper';

const Education = ({history}) => (
    <CompWrapper>
        <div className="card">
            <div className="card-header">
                <h3>Education</h3>
            </div>
            <div className="card-body">
                <div className="container-fluid row">
                {
                    edu.map((item,i_no) => (
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={i_no}>
                            <div className="card">
                                <div className="card-header">
                                    <h3>{item.board}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{item.description}</p>
                                    <p>Grade achieved: {item.grade}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" style={{marginLeft: "2em", marginTop: "0.5em"}}onClick={history.goBack}>
                    Go Back
                </button>
            </div>   
        </div>
    </CompWrapper>
);

export default withRouter(Education);