import React from 'react';
import Project from '../ui/Project';

const Heliostat = () => {
  return (
    <Project>
      <img className="project-modal-img" src="./assets/images/projects/heliostat.jpg" />
      <div className="content-flex">
        <span>
          A heliostat is a device which uses a plane mirror to reflect sunlight to a predetermined target. Our product was designed to reflect this light into home skylights. They are stackable and the code is versatile so as to allow more than one in use to reflect to different targets depending on the day. Our team went from sketch and concept design stages, to a more robust product design in CAD and the final 3D-printed printed project (worm gear and everything). The sun position was tracked using an Arduino controller depending on the location of the device and a realtime clock chip. The drift was known from the datasheet and the clock resets itself properly to avoid differences with the actual time (something to the tune of 10 seconds a year). A simple reflective surface was used for our demo (due to budget constraints ha).
        </span>
      </div>
    </Project>
  )
}

export default Heliostat;