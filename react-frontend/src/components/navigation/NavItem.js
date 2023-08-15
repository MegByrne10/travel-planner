import { NavLink } from 'react-router-dom';

const styles = {
  base: 'hover:text-fuchsiaFever-400',
  active: 'text-fuchsiaFever-400 border-b-2 border-jadeMountain-500'
}

function NavItem({to, content}) {
  return (
    <li className='text-white font-face-dolce-vita-bold text-xl cursor-pointer'>
      <NavLink 
        to={to}
        className={({isActive}) => isActive ? styles.active : styles.base}
      >
        {content}
      </NavLink>
    </li>
  )
}

export default NavItem;