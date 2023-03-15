import items from './items';
import css from './navbar.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selectors';
import NavbarContacts from 'navbar/NavbarContacts/NavbarContacts';
import NavbarUser from 'navbar/NavbarUser/NavbarUser';

const isActive = ({isActive}) => {
  return isActive ? `${css.list} ${css.active}` : css.list;
}
const Navbar = () => {

  const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link} className={isActive}>{text}</NavLink>
    </li>
  ));
  return (
    <>
    { !isLogin && <ul className={css.group}>{elements} </ul>}
    { isLogin && <div className={css.wrapper}><NavbarContacts/>
    <NavbarUser/></div>}
    </>
  );
};

export default Navbar;
