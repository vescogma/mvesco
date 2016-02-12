import React from 'react';
import Project from '../ui/Project';

const Pillsafe = () => {
  return (
    <Project>
      <img className="project-modal-img" src="./assets/images/projects/pillsafe.jpg" />
      <div className="content-flex">
        <span>
          Pillsafe: An automated pill dispensing unit for our final Mechatronics design project at McMaster University. Our team has engineered a solution for the safe & simple storage and delivery of patient's pills, at an affordable price. After extensive research, concept design and screening sessions, material selection and back to the drawing board parties... we created a solution with the use of a PIC microcontroller at the heart for cost and power efficiency and a rotating CAD storage design. For more information please visit our group's webpage at <a href="pillsafe.ca" target="_blank">pillsafe.ca</a>
        </span>
      </div>
    </Project>
  )
}

export default Pillsafe;