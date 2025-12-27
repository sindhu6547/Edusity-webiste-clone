import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>200 ? setSticky(true) :setSticky(false)
    })
  },[])
  const [mobilemenu,setMobilemenu]=useState(false)
  const toggleMenu=()=>{
    mobilemenu?setMobilemenu(false):setMobilemenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src="https://greatstack.in/assets/logo-DUdXW4nF.png" className="logo"></img>
      <ul className={mobilemenu?'' : 'mobile-view'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link  to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link  to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link  to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link  to='testmonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true}  offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img className='menu-icon' onClick={toggleMenu} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABQCAYAAADr/ADSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7d2xEYAwDARBi/57BpMwQwW+YLeFS/WjubfFZ7YVcC2ShIkSJkqYKGGihIkSJkqYKGGihIkSBgAAAAAAAAAAOGQsyprclUUJEyVMlDBRwkQJEyVMlDBRwkQJEyUMAAAAAAAAAABwSOIf18uy7c9dWZQwUcJECRMlTJQwUcJECRMlTJQwUcJEPT/mDD5eCGIPAAAAAElFTkSuQmCC'></img>
    </nav>
  )
}

export default Navbar
