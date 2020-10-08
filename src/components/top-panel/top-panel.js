import React from 'react';
import './styles.css';
import { MENU } from '../../App';
import { NavLink } from 'react-router-dom';

const TopPanel = () => {

        return (
            <div className="top-panel-wrapper">
                <ul className="navigation-menu">
                    {MENU.map((menuItem, index) => (
                        <li key={index} className="nav-item">
                            <NavLink to={menuItem.path}
                                    className="top-panel-btn">
                                {menuItem.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default TopPanel;