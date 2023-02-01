import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      Nav page
      <ul>
        <li>
          <NavLink to="comp1">Comp1</NavLink>
        </li>
        <li>
          <NavLink to="todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="btnclickcounter">Button Click Counter</NavLink>
        </li>
        <li>
          <NavLink to="classComp">ClassComp Greet</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
