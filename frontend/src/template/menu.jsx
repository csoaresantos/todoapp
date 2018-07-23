import React from 'react'
import { Link } from 'react-router-dom'
import Todo from '../todo/todo'
import About from '../about/about'
import { NavLink } from "react-router-dom";

export default props => (
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div className='navbar-header'>
    <a className='navbar-brand' href='#'>
        <i className='fa fa-calendar-check-o'></i> TodoApp
    </a>
</div>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    
     <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#/todos">Tarefas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/about">Sobre</a>
      </li>
     </ul>
    
  </div>
</nav>
</div>
)