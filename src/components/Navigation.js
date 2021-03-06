import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">CreateBlog</NavLink>
            {' | '}
            <NavLink to="/allblogs">DisplayBlog</NavLink>
            {' | '}
            <NavLink to="/listblog">ListBlog</NavLink>
        </div>
    )
}

export default Navigation;
