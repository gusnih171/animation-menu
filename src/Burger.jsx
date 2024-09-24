import React from 'react'
import './Burger.css';

const Burger = () => {

    return (
    <div>
        <input type="checkbox" id="menuPinkie"/>
        <label id="burger" for="menuPinkie">
            <div></div>
            <div></div>
            <div></div>
        </label>
        <nav id="menu">
        <ul>
          <li><a href='https://github.com/gusnih171'>About</a></li>
          <li><a href='https://github.com/gusnih171'>Github</a></li>
          <li><a href='https://github.com/gusnih171'>Blog</a></li>
          <li><a href='https://github.com/gusnih171'>Contact</a></li>
        </ul>
        </nav>
    </div>
    ) }
    export default Burger;