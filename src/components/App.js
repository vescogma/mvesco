import React, { Component } from 'react';
// sections components
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// project components
import Mandelbrot from './projects/Mandelbrot';
import ModelCar from './projects/ModelCar';
import RTMotor from './projects/RTMotor';
import Pillsafe from './projects/Pillsafe';
import Pacemaker from './projects/Pacemaker';
import Heliostat from './projects/Heliostat';
// ui components
import Modal from './ui/Modal';
// others
import {
  initializeCards,
  setHeights,
  calculateHeights,
  calculateCards,
  getDelta,
} from '../utils/cardUtils';

class App extends Component {
  interruptAnimation = false;
  firstTouch = false;
  modalOpen = false;
  touches = [];
  size = 0;
  colors = [
    { color: '#222222', image: 'url(\'./assets/banner.jpg\')' },
    { color: '#2471B0', image: 'none' },
    { color: '#5043C9', image: 'none' },
    { color: '#743596', image: 'none' },
    { color: '#75415C', image: 'none' },
  ];

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('touchmove', this.handleTouch);
    this.setState({ modal: 0, title: '', component: undefined });
  }

  componentDidMount() {
    this.refs.wrap.style.visibility = 'visible';
    this.size = window.innerHeight;
    this.nodes = Array.from(this.refs.wrap.children);
    this.cards = initializeCards(this.nodes, this.size);
    this.setTransform();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('touchmove', this.handleTouch);
  }

  render() {
    const modalProps = {
      toggleProject: this.toggleModal,
      title: this.state.title,
      visible: !!this.state.modal,
      children: this.state.component,
    }
    return (
      <div>
        <div ref="wrap" className="card-holder">
          <Header />
          <About />
          <Skills />
          <Projects toggleProject={ this.toggleModal } />
          <Contact />
        </div>
        <Modal { ...modalProps } />
      </div>
    );
  }

  handleResize = (event) => {
    this.interruptAnimation = true;
    this.size = window.innerHeight;
    this.nodes = Array.from(this.refs.wrap.children);
    this.cards = initializeCards(this.size, this.nodes);
    this.setTransform();
  };

  handleScroll = (event) => {
    if (!this.firstTouch) {
      this.nodes = Array.from(this.refs.wrap.children);
      this.cards = setHeights(this.cards, this.nodes, this.size);
      this.firstTouch = true;
    }
    if (!this.modalOpen) {
      this.interruptAnimation = true;
      this.handleMove(event, 'wheel');
    }
  };

  handleTouchStart = (event) => {
    if (!this.firstTouch) {
      this.nodes = Array.from(this.refs.wrap.children);
      this.cards = setHeights(this.cards, this.nodes, this.size);
      this.firstTouch = true;
    }
    if (!this.modalOpen) {
      this.interruptAnimation = true;
      const touch = event.touches[0];
      this.addTouch({ y: touch.clientY, stamp: Date.now() });
    }
  };

  handleTouch = (event) => {
    if (!this.modalOpen) {
      this.handleMove(event.touches[0], 'touch');
    }
  };

  handleTouchEnd = (event) => {
    if (!this.modalOpen) {
      this.handleRelease(this.touches);
      this.touches = [];
    }
  };

  handleMove = (event, type) => {
    const delta = getDelta(event, type, this.touches, this.addTouch);
    if (delta > 0 || delta < 0) {
      this.cards = calculateCards(this.cards, delta, this.size, this.nodes);
      this.setTransform();
    }
  };

  handleRelease = (touches) => {
    let velocity = 0;
    touches.reduce(function (prev, next) {
      const elapsed = next.stamp - prev.stamp;
      const delta = next.y - prev.y;
      const v = 1000 * delta / (1 + elapsed);
      velocity = 0.8 * v + 0.2 * velocity;
      return next;
    })
    if (velocity > 50 || velocity < -50) {
      this.scrollTo(-velocity);
    }
  };

  scrollTo = (velocity, specific) => {
    let amplitude = 0;
    let target = specific;
    const move = this.handleMove;
    let moved = 0;
    if (!target) {
      amplitude = 0.6 * velocity;
      target = Math.round(amplitude);
    } else {
      amplitude = 1000;
    }
    const start = Date.now();
    this.interruptAnimation = false;
    requestAnimationFrame(animateRelease.bind(this));

    function animateRelease() {
      if (!this.interruptAnimation) {
        const elapsed = Date.now() - start;
        const remainder = -amplitude * Math.exp(-elapsed / 325);
        const toMove = target + remainder - moved;
        if (remainder > 1 || remainder < -1) {
          moved = target + remainder;
          move(Math.round(toMove), 'offset');
          requestAnimationFrame(animateRelease.bind(this));
        } else {
          move(Math.round(remainder), 'offset');
        }
      }
    }
  };

  setBannerColor = () => {
    const index = this.cards.reduce((prev, next, index) => {
      if (next.top === true) {
        return index;
      }
      return prev;
    }, 0)
    const header = document.getElementById('header');
    header.style.backgroundColor = this.colors[index].color;
    header.style.backgroundImage = this.colors[index].image;
  };

  setTransform = () => {
    let prop = '';
    this.nodes.map((card, index) => {
      prop = 'translate3d(0px, ' + this.cards[index].offset + 'px, 0px)';
      transform(card, prop);
      return card;
    });
    this.setBannerColor();

    function transform(node, transformProp) {
      node.style.WebkitTransform = transformProp;
      node.style.MozTransform = transformProp;
      node.style.msTransform = transformProp;
      node.style.transform = transformProp;
    };
  };

  addTouch = (touch) => {
    this.touches.push(touch);
    if (this.touches.length > 5) {
      this.touches.splice(0, this.touches.length - 5);
    }
  };

  toggleModal = (index) => {
      let title = '';
      let component = undefined;
      switch (index) {
        case 1:
          title = 'Mandelbrot Final Project';
          component = ( <Mandelbrot /> );
          break;
        case 2:
          title = 'Miniature Car Body Design';
          component = ( <ModelCar /> );
          break;
        case 3:
          title = 'Real-Time Motor Control';
          component = ( <RTMotor /> );
          break;
        case 4:
          title = 'Automated Pill Dispenser';
          component = ( <Pillsafe /> );
          break;
        case 5:
          title = 'Embedded Pacemaker & Monitor';
          component = ( <Pacemaker /> );
          break;
        case 6:
          title = 'Skylight Reflector Heliostat';
          component = ( <Heliostat /> );
          break;
        default:
          title = '';
          component = ( <div></div> );
          break;
      }
      this.modalOpen = !!index;
      this.setState({ modal: index, title: title, component: component });
  };
};

export default App;