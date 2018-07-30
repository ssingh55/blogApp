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

// import React, { Proptypes } from 'react';
// import { Link, IndexLink } from 'react-router';

// const Navigation = () => {
//   return (
//     <nav>
//       <IndexLink to="/" activeClassName="active">Home</IndexLink>
//       {" | "}
//       <Link to="/about" activeClassName="active">About</Link>
//       {" | "}
//       <Link to="/courses" activeClassName="active">Courses</Link>
//     </nav>
//   );
// };

// export default Navigation;
