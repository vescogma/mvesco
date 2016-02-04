import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <Card
      title="Projects"
      colorClass="bg-purple">
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Mandelbrot Video
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Car Body Design
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            RT Servomotor
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Pillsafe
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Heliostat Project
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            GPS Filter Board
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Instruments Page
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Pacemaker Design
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Projects;