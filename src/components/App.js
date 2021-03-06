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
import Titles from './ui/Titles';
// others
import {
  initializeCards,
  setHeights,
  calculateHeights,
  calculateCards,
  getDelta,
} from '../utils/cardUtils';
import {
  headerProps,
  projectsProps,
} from '../utils/constants';

class App extends Component {
  interruptAnimation = false;
  firstTouch = false;
  modalOpen = false;
  touches = [];
  height = 0;
  width = 0;
  titleIndex = 0;

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('touchmove', this.handleTouch);
    this.setState({ modal: 0, title: '', component: undefined });
  }

  componentDidMount() {
    this.refs.wrap.style.visibility = 'visible';
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.nodes = Array.from(this.refs.wrap.children)
    this.nodes.splice(-1);
    if (this.width > 640) {
      this.cards = initializeCards(this.nodes, this.height);
      this.setTransform();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
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
          <Titles />
        </div>
        <Modal { ...modalProps } />
      </div>
    );
  }

  handleResize = (event) => {
    this.interruptAnimation = true;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.nodes = Array.from(this.refs.wrap.children)
    this.nodes.splice(-1);
    if (this.width > 640) {
      this.cards = initializeCards(this.nodes, this.height);
      this.setTransform();
      this.setBanner();
    } else {
      this.nodes.map(card => {
        card.style.transform = 'none';
      })
    }
  };

  handleScroll = (event) => {
    if (this.width > 640) {
      if (!this.firstTouch) {
        this.nodes = Array.from(this.refs.wrap.children)
        this.nodes.splice(-1);
        this.cards = setHeights(this.cards, this.nodes, this.height);
        this.firstTouch = true;
      }
      if (!this.modalOpen) {
        this.interruptAnimation = true;
        this.handleMove(event, 'wheel');
      }
    } else {
      this.mobileScroll();
    }
  };

  handleTouchStart = (event) => {
    if (this.width > 640 && !this.firstTouch) {
      this.nodes = Array.from(this.refs.wrap.children)
      this.nodes.splice(-1);
      this.cards = setHeights(this.cards, this.nodes, this.height);
      this.firstTouch = true;
    }
    if (this.width > 640 && !this.modalOpen) {
      this.interruptAnimation = true;
      const touch = event.touches[0];
      this.addTouch({ y: touch.clientY, stamp: Date.now() });
    }
  };

  handleTouch = (event) => {
    if (this.width > 640 && !this.modalOpen) {
      this.handleMove(event.touches[0], 'touch');
    }
  };

  handleTouchEnd = (event) => {
    if (this.width > 640 && !this.modalOpen) {
      this.handleRelease(this.touches);
      this.touches = [];
    }
  };

  handleMove = (event, type) => {
    const delta = getDelta(event, type, this.touches, this.addTouch);
    if (delta > 0 || delta < 0) {
      this.cards = calculateCards(this.cards, delta, this.height, this.nodes);
      this.setTransform();
      this.setBanner();
    }
  };

  handleRelease(touches) {
    let velocity = 0;
    touches.reduce(function (prev, next) {
      const elapsed = next.stamp - prev.stamp;
      const delta = next.y - prev.y;
      const v = 1000 * delta / (1 + elapsed);
      velocity = 0.8 * v + 0.2 * velocity;
      return next;
    })
    if (velocity > 75 || velocity < -75) {
      this.scrollTo(-velocity);
    }
  };

  scrollTo(velocity, specific) {
    let amplitude = 0;
    // maybe one day
    let target = specific;
    let moved = 0;
    if (!target) {
      amplitude = 0.6 * velocity;
      target = Math.round(amplitude);
    } else {
      amplitude = 1000;
    }
    const start = Date.now();
    this.interruptAnimation = false;
    requestAnimationFrame(this.release(start, amplitude, target, moved));
  };

  release = (start, amplitude, target, moved) => {
    return () => {
      if (!this.interruptAnimation) {
        const elapsed = Date.now() - start;
        const remainder = -amplitude * Math.exp(-elapsed / 325);
        const toMove = target + remainder - moved;
        if (remainder > 1 || remainder < -1) {
          moved = target + remainder;
          this.handleMove(Math.round(toMove), 'offset');
          requestAnimationFrame(this.release(start, amplitude, target, moved));
        } else {
          this.handleMove(Math.round(remainder), 'offset');
        }
      }
    };
  };

  mobileScroll() {
    let index = 0;
    let d = 0
    this.nodes.map((card, i) => {
      const top = card.getBoundingClientRect().top;
      if (top <= 0) {
        index = i;
      }
      if (top > 0 && top < 60 && index < i) {
        d = top;
      }
    });
    let prop = 'translate3d(0px, ' + (d > 0 ? d - 60 : 0) + 'px, 0px)';
    this.transform(document.getElementById('titles'), prop);
    if (this.titleIndex !== index) {
      this.setFixedBanner(index);
    }
    if (index === 0) {
      document.getElementById('titles').className = 'titles-hidden';
    }
    this.titleIndex = index;
  }

  setBanner() {
    let titleIndex = 0;
    this.cards.map((card, index) => {
      if (card.offset <= 0) {
        this.nodes[index].classList.add('card-back');
        titleIndex = index;
      } else {
        this.nodes[index].classList.remove('card-back');
      }
    });
    if (this.titleIndex !== titleIndex) {
      const header = document.getElementById('header');
      header.className = 'header ' + headerProps[titleIndex].header;
      this.setFixedBanner(titleIndex)
    }
    if (titleIndex === 0) {
      document.getElementById('titles').className = 'titles-hidden';
    }
    this.titleIndex = titleIndex;
  };

  setFixedBanner(titleIndex) {
    const invisBar = document.getElementById('titles');
    const invisHeader = invisBar.querySelector('.titles-header');
    const classes = headerProps[titleIndex].class;
    invisBar.className = 'titles-container';
    invisHeader.innerText = headerProps[titleIndex].title;
    invisHeader.className = 'titles-header ' + classes;
  }

  setTransform() {
    this.nodes.map((card, index) => {
      let prop = 'translate3d(0px, ' + this.cards[index].offset + 'px, 0px)';
      this.transform(card, prop);
      return card;
    });
  };

  transform(node, transformProp) {
    node.style.WebkitTransform = transformProp;
    node.style.MozTransform = transformProp;
    node.style.msTransform = transformProp;
    node.style.transform = transformProp;
  }

  addTouch = (touch) => {
    this.touches.push(touch);
    if (this.touches.length > 5) {
      this.touches.splice(0, this.touches.length - 5);
    }
  };

  toggleModal = (index) => {
    this.modalOpen = !!index;
    this.setState({
      modal: index,
      title: index === 0 ? '' : projectsProps[index - 1].label,
      component: getComponent(index),
    });

    function getComponent(index) {
      switch (index) {
        case 1: return ( <Mandelbrot /> );
        case 2: return ( <ModelCar /> );
        case 3: return ( <RTMotor /> );
        case 4: return ( <Pillsafe /> );
        case 5: return ( <Pacemaker /> );
        case 6: return ( <Heliostat /> );
        default: return undefined;
      }
    }
  };
};

export default App;