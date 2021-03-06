import React, {useState, useRef} from 'react';
import './App.css';
import Nav from './Components/Nav';
import Section from './Components/Section';
import backgroundImage1 from './images/1.jpeg';
import backgroundImage2 from './images/2.jpeg';
import backgroundImage3 from './images/3.jpeg';
import backgroundImage4 from './images/4.jpeg';
import tetra from './images/tetra-animation-basic.gif';
import Footer from './Components/Footer';

function App() {
  const grid = [backgroundImage1, backgroundImage2, backgroundImage4];
  // set the starting position of the cursor outside of the screen
  const [xMain, setxMain] = useState(0);
  const [yMain, setyMain] = useState(0);
  const [xTrailing, setxTrailing] = useState(0);
  const [yTrailing, setyTrailing] = useState(0);
  const cursorsRef = useRef(null);
  const smolCursorRef = useRef(null);

  function handleMouseMove(e) {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const {clientX, clientY} = e;
    setxMain(clientX);
    setyMain(clientY);

    setTimeout(() => {
      setxTrailing(clientX);
      setyTrailing(clientY);
    }, 100);
  }

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="cursors">
        <div
          ref={cursorsRef}
          className="outerCursor"
          id="outer"
          style={{
            left: xMain,
            top: yMain,
          }}
        />
        <div
          ref={smolCursorRef}
          className="cursor"
          style={{
            left: xTrailing,
            top: yTrailing,
          }}
        />
      </div>
      <Nav ref={{ref1: cursorsRef, ref2: smolCursorRef}} />
      <Section
        title=""
        subtitle=""
        dark={true}
        id="section1"
        backImg={backgroundImage3}
        height="90vh"
      ></Section>
      <Section
        title=""
        subtitle=""
        dark={false}
        id="section2"
        backImg={tetra}
        height="50vh"
      />
      <Section
        title=""
        subtitle=""
        dark={true}
        grid={grid}
        id="section3"
        height="50vh"
      />
      <Section
        title=""
        subtitle="This is the future."
        dark={true}
        id="section4"
        height="50vh"
      />
      <Section title="" subtitle="" dark={false} id="section5" height="50vh" />
      <Footer ref={{ref1: cursorsRef, ref2: smolCursorRef}} />
    </div>
  );
}

export default App;
