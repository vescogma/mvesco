import React from 'react';
import Project from '../ui/Project';

const ModelCar = () => {
  return (
    <Project>
      <img className="project-modal-img" src="./assets/images/projects/carbody.jpg" />
      <div className="content-flex">
        <span>
          A Fischertechnik battery-operated model car chassis was recreated in Siemens NX CAD modelling environment. The parts were all created in NX while the wheels were made with Inventor. The rims and the car body were created in Alias using a Tesla Model S as an inspiration. A few things had to be changed around because of the base hobby car (such as the wheel position) but it remains a homage to the electric car. Finishing the constructors and surfs of the car with Alias, it was exported as a mesh to NX for the placement on top of the chassis.
        </span>
      </div>
    </Project>
  )
}

export default ModelCar;