import items from './items';
import css from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const isActive = ({isActive}) => {
  return isActive ? `${css.list} ${css.active}` : css.list;
}
const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link} className={isActive}>{text}</NavLink>
    </li>
  ));
  return (
    <ul className={css.group}>
      {elements}
    </ul>
  );
};

export default Navbar;
