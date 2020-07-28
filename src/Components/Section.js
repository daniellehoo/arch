import React from 'react'


function Section ({ title, subtitle, dark, id, backImg, height }) {
    const divStyle = {
        color: 'grey',
        backgroundImage: `url(${backImg})`,
        height: height
    }

  return (
    <div className={'section' + (dark ? ' section-dark' : '')}
    id = { id }
    style={divStyle}>
      <div className='section-content'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Section