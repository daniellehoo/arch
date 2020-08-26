import React from 'react';

function Section({title, subtitle, dark, id, backImg, grid, height}) {
  const gridArray = grid
    ? grid.map((image, index) => {
        return (
          <div className="grid-item" key={index}>
            <img src={image} alt={image}/>
          </div>
        );
      })
    : null;
  const divStyle = {
    color: 'grey',
    backgroundImage: `url(${backImg})`,
    height: height,
  };

  return (
    <div
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
      style={divStyle}
    >
      <div className="section-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={grid ? 'grid' : 'hidden'}>{gridArray}</div>
      </div>
    </div>
  );
}

export default Section;
