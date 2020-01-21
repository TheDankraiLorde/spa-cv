import React from 'react';
import skills from '../../data/skills'
import {withRouter} from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import shake from 'react-animations/lib/shake';
import CompWrapper from '../Wrapper/CompWrapper'

const Pulse = styled.div`animation: 0.25s ${keyframes `${shake}`}  1`

const Skills = ({history}) => (
    <CompWrapper>
        <div className="card">
            <div className="card-header">
                <h3>Skills</h3>
            </div>
            <div className="card-body">
                <div className="container-fluid row">
                {
                    Object.keys(skills).map((skill, s_no) => (
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={s_no}>
                            <Pulse>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 style={{textTransform: "capitalize"}}>
                                            {skill}
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <p>Experience: {skills[skill].time} {skills[skill].time === 1 ? "year": "years"}</p>
                                        <hr/>
                                        <p>{skills[skill].description}</p>
                                        <hr/>
                                        {
                                            (skills[skill].version) ? <p>Version: {skills[skill].version}</p> : null
                                        }
                                    </div>
                                </div>
                            </Pulse>
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
)

export default withRouter(Skills)