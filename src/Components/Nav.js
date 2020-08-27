import React, {useEffect, useRef} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {TweenMax, Power1, TimelineLite} from 'gsap';

function Nav({props}, ref) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const {ref1, ref2} = ref;
  const container = useRef(null);

   useEffect(() => {
     container.current.addEventListener('mouseenter', function () {
       TweenMax.to(ref1.current, 1, {scale: 3});
       ref2.current.style.display = 'none';
     });
     return () => {
       container.current.addEventListener('mouseleave', function () {
         TweenMax.to(ref1.current, 1, {scale: 1});
         ref2.current.style.display = 'initial';
       });
     };
   });

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <h1 className="swing" onClick={scroll.scrollToTop} ref={container}>
          we are BLO.CKs
        </h1>
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

const forwardedNav = React.forwardRef(Nav);
export default forwardedNav;