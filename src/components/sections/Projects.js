import React from 'react';
import Card from '../ui/Card';
import { projectsProps } from '../../utils/constants';

const Projects = ({ toggleProject }) => {
  return (
    <Card
      title="Projects"
      colorClass="projects-title">
      {
        projectsProps.map((p, i) => {
          return (
            <div key={ i } className="flex-auto">
              <div
                className="project"
                onClick={ () => toggleProject(i + 1) }>
                <div className="project-image"></div>
                <div className="project-title">
                  <div className={ `project-icon icon-${ p.icon }` }></div>
                  { p.label }
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