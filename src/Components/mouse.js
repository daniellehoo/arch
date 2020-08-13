import React from 'react';
import {TweenMax, Power1, TimelineLite} from 'gsap';

let clientX = -300,
  clientY = -300,
  // elements
  outerCursor = document.querySelector('.cursor--outer'),
  innerCursor = document.querySelector('.cursor--inner'),
  link = document.querySelector('.link');

let initCursor = function () {
  // add listener to track the current mouse position
  document.addEventListener('mousemove', function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  var render = function () {
    TweenMax.set(outerCursor, {
      x: clientX,
      y: clientY,
      delay: 0.08,
      ease: Power1.easeOut,
    });

    TweenMax.set(innerCursor, {
      x: clientX,
      y: clientY,
    });

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

initCursor();

function mouse() {
  return (
    <>
      <div className="cursor cursor--outer"></div>
      <div className="cursor cursor--inner"></div>
    </>
  );
}

export default mouse;
