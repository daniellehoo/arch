import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import Nav from './Components/Nav'
import Section from './Components/Section'
import dummyText from './DummyText'
import backgroundImage1 from './images/1.jpeg'
import backgroundImage2 from './images/2.jpeg'
import tetra from './images/tetra-animation-basic.gif'
import Footer from './Components/footer'

function App () {
  return (
    <div className="App">
      <Nav />
      <Section
        title=""
        subtitle=""
        dark={true}
        id="section1"
        backImg={backgroundImage2}
        height="100vh"
      />
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
        subtitle="This is the future."
        dark={true}
        id="section3"
      />
      <Section
        title=""
        subtitle=""
        dark={false}
        id="section4"
        backImg={backgroundImage1}
        height="50vh"
      />
      <Section
        title="Section 5"
        subtitle={dummyText}
        dark={true}
        id="section5"
      />
      <Footer id="footer" />
    </div>
  );
}

export default App
