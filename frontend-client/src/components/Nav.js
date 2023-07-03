import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/userActions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className='navbar-brand'>
            LOGO
          </div>
          <Link to="/" className='nav-link active' aria-current="page">Home</Link>
          <Link to="/dashboard" className='nav-link'>Dashboard</Link>
          <Link to="/signup" className='nav-link'>Signup</Link>
          <Link to="/login" className='nav-link'>Login</Link>
          <Link to="/" onClick={handleLogout} className='nav-link'>
            Logout
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Nav;