import React from 'react'


function Section ({ title, subtitle, dark, id, backImg }) {
    const divStyle = {
        color: 'grey',
        backgroundImage: `url(${backImg})`,
        height: '50vh'
    }

  return (
    <div className={'section' + (dark ? ' section-dark' : '')}
    style={divStyle}>
      <div className='section-content' id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Section