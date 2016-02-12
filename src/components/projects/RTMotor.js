import React from 'react';
import Project from '../ui/Project';

const RTMotor = () => {
  return (
    <Project>
      <img className="project-modal-img" src="./assets/images/projects/pid.jpg" />
      <div className="content-flex">
        <span>
          Using Red Hat as a control environment, a servo motor was operated using both Scilab and RTAI to compare a smoothing function created using a real-time kernel configuration and an automated Scilab PID. The results of the code are almost as precise as those obtained from the Scilab simulation. The code outputs the position of the servo motor in degrees from a starting point, giving information to visualize the stability based on time. This gives us an easy way to find rise and settling time. You can see how the PID controller affects the closed-loop system, changing the damping of the response.
        </span>
      </div>
    </Project>
  )
}

export default RTMotor;