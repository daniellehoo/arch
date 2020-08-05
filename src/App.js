import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import Nav from './Components/Nav';
import Section from './Components/Section';
import dummyText from './DummyText';
import backgroundImage1 from './images/1.jpeg';
import backgroundImage2 from './images/2.jpeg';
import tetra from './images/tetra-animation-basic.gif';
import Footer from './Components/footer';
import gridImages from './images/2.jpeg';

function App() {
  const grid = [backgroundImage1, backgroundImage2, gridImages];
  return (
    <div className="container">
      <Nav />
      <h1 className="swing">we are BLO.CKs</h1>
      <Section
        title=""
        subtitle=""
        dark={true}
        id="section1"
        backImg={backgroundImage2}
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
        subtitle="grid"
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
      <Footer />
    </div>
  );
}

export default App;
