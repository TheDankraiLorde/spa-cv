import React from 'react';
import {Link} from 'react-router-dom';

const MenuItem = ({item}) => (
    <Link to={`/${item.link}`}>
        <div className="card border-dark">
            <div className="card-header">
                <h5>{item.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">
                    {item.description}
                </p>
            </div>
        </div>
    </Link>
)

export default MenuItem;