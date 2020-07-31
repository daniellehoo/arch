import React, {Component} from 'react';
import MapboxGLMap from './Mapbox';


function footer() {
  return (
    <div className="footer">
    <MapboxGLMap/>
      <ul>
        <li>copyright 2020</li>
        <li> collaborate </li>
        <li>contact us</li>
      </ul>
    </div>
  );
}

export default footer;
