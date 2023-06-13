import React from 'react'
import user from './../../assets/images/SVG File/Profle 30.svg'
import dash from './../../assets/images/SVG File/Path 690.svg'
import logo from './../../assets/images/SVG File/Full Logo.svg'
import './Nav.css'
export default function Nav() {
  return (
    <nav className='nav'>
        <div className='container'>
            <div className='nav__wrapper center'>
              <div className='nav__left center'>
                <img className='nav__logo' src={logo}/>
                <ul className='nav__menus center'>
                  <li className='nav__menu'>Browse</li>
                  <li className='nav__menu'>Library</li>
                  <li className='nav__menu'>Home</li>
                </ul>
              </div>
                <div className='nav__right center'>
                <input type='text' className='nav__serch' placeholder='Search'/>
                <div className='nav__personal center'>
                  <img src={user}></img>
                  <p className='nav__user-name'>ManiFanei</p>
                  <img className='nav__dahs' src={dash}></img>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
