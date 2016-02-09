import React from 'react';
import Card from '../ui/Card';

const Projects = ({ toggleProject }) => {
  const projects = [
    'Mandelbrot Final Project',
    'Miniature Car Body Design',
    'Real-Time Motor Control',
    'Automated Pill Dispenser',
    'Embedded Pacemaker & Monitor',
    'Skylight Reflector Heliostat',
  ]
  return (
    <Card
      title="Projects"
      colorClass="projects-title">
      {
        projects.map((project, index) => {
          return (
            <div key={ index } className="flex-auto">
              <div
                className="project"
                onClick={ () => toggleProject(index + 1) }>
                <div className="project-image"></div>
                <div className="project-title">
                  <div className="project-icon"></div>
                  { project }
                </div>
              </div>
            </div>
          );
        })
      }
    </Card>
  )
}

export default Projects;