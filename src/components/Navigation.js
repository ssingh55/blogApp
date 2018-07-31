import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">CreateBlog</NavLink>
            {' | '}
            <NavLink to="/blogdetails">DisplayBlog</NavLink>
            {' | '}
            <NavLink to="/listblog">ListBlog</NavLink>
        </div>
    )
}

export default Navigation;
