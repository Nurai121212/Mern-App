import { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export default function NavBar(){
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate('/')
  };

  return(
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 3rem'}}>
        <span className="brand-logo">Logo</span>
        <ul className="right hide-on-med-and-down" id="nav-mobile">
          <li><NavLink to={'/create'}>Создать</NavLink></li>
          <li><NavLink to={'/links'}>Ссылки</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}