import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  render () {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <h1 className="swing"
          onClick={scroll.scrollToTop}
          >we are BLO.CKs</h1>
          <ul className="nav-items">
            <li className="nav-item swing">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Project 1
              </Link>
            </li>
            <li className="nav-item swing">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Project 2
              </Link>
            </li>
            <li className="nav-item swing">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Project 3
              </Link>
            </li>
            <li className="nav-item swing">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Project 4
              </Link>
            </li>
            <li className="nav-item swing">
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav
