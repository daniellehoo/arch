import React, {useEffect, useRef} from 'react';
import MapboxGLMap from './Mapbox';
import {TweenMax, Power1, TimelineLite} from 'gsap';

function Footer({props}, ref) {
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
    <div className="footer">
      <MapboxGLMap />
      <ul ref={container}>
        <li>copyright 2020</li>
        <li> collaborate </li>
        <li> contact us </li>
      </ul>
    </div>
  );
}

const forwardedRef = React.forwardRef(Footer);
export default forwardedRef;
