import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navbar.styles.scss'
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
          <Link className='nav-link' to='/auth'>
            Login
          </Link>
          <Link className='nav-link' to='/cart'>
            <div>Cart</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation