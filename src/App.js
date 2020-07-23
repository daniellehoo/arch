import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import Nav from './Components/Nav'
import Section from './Components/Section'
import dummyText from './DummyText'
import backgroundImage1 from './images/1.jpeg'
import backgroundImage2 from './images/2.jpeg'


function App () {
  return (
    <div className='App'>
      <Nav />
      <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
          backImg={backgroundImage1}
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
          backImg = { backgroundImage2 }
        />
        <Section
          title=""
          subtitle="This is the future."
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
    </div>
  )
}

export default App
