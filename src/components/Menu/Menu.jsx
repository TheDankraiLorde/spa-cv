import React from 'react';
import menu from '../../data/menu';
import './menu.css'
import CompWrapper from '../Wrapper/CompWrapper';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {

    return (
    <CompWrapper>
        <div className="container-fluid row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {
                menu.map((item, ind) => (
                    <MenuItem item={item} key={ind}/>
                ))
            }
            </div>
        </div>
   </CompWrapper>
)};

export default Menu;