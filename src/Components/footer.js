import React, {useEffect, useRef} from 'react';
import MapboxGLMap from './Mapbox';
import {TweenMax, Power1, TimelineLite} from 'gsap';

function Footer({props}, ref) {
  console.log(ref);
  // const cursors = ref;
  const {ref1, ref2} = ref;

  const container = useRef(null);

  // useEffect(() => {
  //   cursors.current.growOnHover();
  // }, []);

  // const useEventListener = (target, type, listener, ...options) => {
  //   React.useEffect(() => {
  //     const targetIsRef = target.hasOwnProperty('current');
  //     const currentTarget = targetIsRef ? target.current : target;
  //     if (currentTarget)
  //       currentTarget.addEventListener(type, listener, ...options);
  //     return () => {
  //       if (currentTarget)
  //         currentTarget.removeEventListener(type, listener, ...options);
  //     };
  //   }, [target, type, listener, options]);
  // };

  // const element = React.useRef(null);
  // useEventListener(element, 'mouseenter', () => growOnHover());
  // useEventListener(element, 'mouseleave', () => growOnHover());

  function growOnHover() {
    container.current.addEventListener('mouseenter', function () {
      TweenMax.to(ref1.current, 1, {scale: 3});
      ref2.current.style.display = 'none';
    });
  }

  function onExit() {
    container.current.addEventListener('mouseleave', function () {
      TweenMax.to(ref1.current, 1, {scale: 1});
      ref2.current.style.display = 'initial';
    });
  }

  return (
    <div className="footer">
      <MapboxGLMap />
      <ul ref={container}>
        <li onMouseEnter={growOnHover} onMouseLeave={onExit}>
          copyright 2020
        </li>
        <li onMouseEnter={growOnHover} onMouseLeave={onExit}>
          {' '}
          collaborate{' '}
        </li>
        <li onMouseEnter={growOnHover} onMouseLeave={onExit}>
          {' '}
          contact us{' '}
        </li>
      </ul>
    </div>
  );
}

const forwardedRef = React.forwardRef(Footer);
export default forwardedRef;
