import React from 'react';
import Project from '../ui/Project';

const Mandelbrot = () => {
  return (
    <Project>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/LCK6zw6t4kQ?rel=0&amp;showinfo=0"
          frameBorder="0"
          allowFullScreen />
      </div>
      <div className="content-flex">
        <span>
          The mandelbrot set is known for its association with complex mathematics, but even more popular due to its recognizable fractal shape. Mpicc was used to compile a program that takes in various parameters to create a beautiful picture from 1024 parallel running processes. Of course permission from UoT was necessary to borrow some time with the BGQ. Over 5000 still frames of the Mandelbrot set at a specific point (too long to type here, just check out the video :P) to create a video running at 30 frames per second. It starts all the way outside and keeps continuously zooming in until the song ends.
        </span>
      </div>
    </Project>
  )
}

export default Mandelbrot;