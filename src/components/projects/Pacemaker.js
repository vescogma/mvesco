import React from 'react';
import Project from '../ui/Project';

const Pacemaker = () => {
  return (
    <Project>
      <img className="project-modal-img" src="./assets/pace.jpg" />
      <div className="content-flex">
        <span>
          Here is the final product (the GUI really) of our working pacemaker. It was designed using a PIC controller on a developer board that takes as an input various electrical signals mimicking ventricular activity. It included a cardiac-monitor style graphical interface for quick visual representation of the heart beat and the adjusted rate. The project was made using C# for the GUI and interlinked with an embedded controller through a USB to receive the signal packets. C was used for programming the chip in the embedded PIC controller board.
        </span>
      </div>
    </Project>
  )
}

export default Pacemaker;