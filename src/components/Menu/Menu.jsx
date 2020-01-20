import React from 'react';
import menu from '../../data/menu';
import {Link} from 'react-router-dom';
import './menu.css'

const Menu = () => (
    <div className="container-fluid row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {
            menu.map((item,ind) => (
                <Link to={`/${item.title}`} key={ind}>
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
            ))
        }
        </div>
    </div>
);

export default Menu;