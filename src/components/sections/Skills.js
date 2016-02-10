import React, { Component } from 'react';
import Card from '../ui/Card';

const Skills = () => {
  return (
    <Card
      title="Skills"
      colorClass="skills-title">
      <div className="skills-col">
        <div className="skills-header">Web</div>
        <div className="skills-content">
          <div>&bull;&nbsp;&nbsp;React</div>
          <div>&bull;&nbsp;&nbsp;Angular 2</div>
          <div>&bull;&nbsp;&nbsp;jQuery</div>
          <div>&bull;&nbsp;&nbsp;Gulp</div>
          <div>&bull;&nbsp;&nbsp;Webpack</div>
          <div>&bull;&nbsp;&nbsp;Ionic</div>
          <div>&bull;&nbsp;&nbsp;React Native</div>
          <div>&bull;&nbsp;&nbsp;MongoDB</div>
          <div>&bull;&nbsp;&nbsp;PostgreSQL</div>
        </div>
      </div>
      <div className="skills-col">
        <div className="skills-header">Coding</div>
        <div className="skills-content">
          <div>&bull;&nbsp;&nbsp;Javascript</div>
          <div>&bull;&nbsp;&nbsp;HTML</div>
          <div>&bull;&nbsp;&nbsp;CSS</div>
          <div>&bull;&nbsp;&nbsp;PHP</div>
          <div>&bull;&nbsp;&nbsp;C++</div>
          <div>&bull;&nbsp;&nbsp;Python</div>
          <div>&bull;&nbsp;&nbsp;LabVIEW</div>
          <div>&bull;&nbsp;&nbsp;Verilog</div>
          <div>&bull;&nbsp;&nbsp;PLC</div>
        </div>
      </div>
      <div className="skills-col">
        <div className="skills-header">Technologies</div>
        <div className="skills-content">
          <div>&bull;&nbsp;&nbsp;SDLC, Agile, XP</div>
          <div>&bull;&nbsp;&nbsp;UX & UI Design</div>
          <div>&bull;&nbsp;&nbsp;DB Administration</div>
          <div>&bull;&nbsp;&nbsp;Version Control - GIT</div>
          <div>&bull;&nbsp;&nbsp;PCB & Circuit Design</div>
          <div>&bull;&nbsp;&nbsp;Networking/Scripting</div>
          <div>&bull;&nbsp;&nbsp;Parallelization - MPI</div>
          <div>&bull;&nbsp;&nbsp;Embedded - µC/FPGA</div>
          <div>&bull;&nbsp;&nbsp;Android Modding</div>
        </div>
      </div>
    </Card>
  )
}

export default Skills;