import React from 'react';
import menu from '../../data/menu';
import {Link} from 'react-router-dom';
import './menu.css'

const Menu = () => (
    <div className="container body">
        <div className="card-deck">
        {
            menu.map((item,ind) => (
                <Link to={`/${item.title}`} key={ind}>
                    <div className="card border-dark mb-3">
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