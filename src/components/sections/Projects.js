import React from 'react';
import Card from '../ui/Card';

const Projects = ({ toggleProject }) => {
  return (
    <Card
      title="Projects"
      colorClass="bg-purple">
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(1) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Mandelbrot Video
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(2) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Car Body Design
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(3) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            RT Servomotor
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(4) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Pillsafe
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(5) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Heliostat Project
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(6) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            GPS Filter Board
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(7) }>
          <div className="project-image"></div>
          <div className="project-title">
            <div className="project-icon"></div>
            Instruments Page
          </div>
        </div>
      </div>
      <div className="flex-auto purple">
        <div className="project" onClick={ () => toggleProject(8) }>
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