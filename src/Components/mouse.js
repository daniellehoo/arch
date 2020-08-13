import React from 'react';
import {TweenMax, Power1, TimelineLite} from 'gsap';
import {useTween} from 'react-use';

class Mouse extends React.Component {
  // we keep track of x and y coordinates for the blue circle - the main one
  // and the trailing circle - the white one
  // for simplicity, they are initialzed to (0, 0), the top left corner of the viewport
  state = {
    xMain: 0,
    yMain: 0,
    xTrailing: 0,
    yTrailing: 0,
  }
  
  handleMouseMove = (e) => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e;

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState({
      xMain: clientX,
      yMain: clientY,
    }, () => {
      // this callback is invoked after the first setState finishes
      // 
      // here we schedule saving the trailing coordinates in state 100ms  
      // after the main coordinates have been set to simulate the trailing
      setTimeout(() => {
        this.setState({
          xTrailing: clientX,
          yTrailing: clientY,
        })
      }, 100);
    })
  }

  render = () => {
    // we retrieve coordinates from state
    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;

    return (
      // we need a container that has a definite height, 800px in my example
      // this is to make sure it leaves enough room for mouse movement to happen and trigger the event handler
      // 
      // also, you don't need the event listener on both your cursor elements, only on the container
      <div
        className='mouse-container'
        onMouseMove={e => this.handleMouseMove(e)}
      >
        <div className='cursors'>
          <div 
            className='cursor'
            style={{ 
              left: xMain, 
              top: yMain,
            }}
          />
                    <div 
            className='cursor'
            style={{ 
              left: xTrailing, 
              top: yTrailing,
            }}
          />
        </div>
      </div>
      )
  }
}


export default Mouse;
