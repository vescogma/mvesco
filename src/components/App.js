import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { initializeCards } from '../utils/cardUtils';

class App extends Component {
  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchstart', this.handleTouch);
    window.addEventListener('touchend', this.handleTouch);
    window.addEventListener('touchmove', this.handleTouch);
  }

  componentDidMount() {
    this.refs.wrap.style.visibility = 'visible';
    const cards = this.refs.wrap.children;
    console.log('setting state');
    this.setState((state, props) => {
      return {
        cards: initializeCards(window.innerHeight, cards),
        size: window.innerHeight,
      };
    });
  }

  componentWillUpdate = (props, state) => {
    console.log('will update');
  };

  componentDidUpdate = (props, state) => {
    console.log('did update');
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchstart', this.handleTouch);
    window.removeEventListener('touchend', this.handleTouch);
    window.removeEventListener('touchmove', this.handleTouch);
  }

  render() {
    return (
      <div ref="wrap" className="card-holder">
        <Header offset={ this.getCardOffset(0) } />
        <About offset={ this.getCardOffset(1) } />
        <Skills offset={ this.getCardOffset(2) } />
        <Contact offset={ this.getCardOffset(3) } />
      </div>
    );
  }

  getCardOffset(index) {
    if (this.state === null ) {
      return 0;
    }
    return this.state.cards[index].offset;
  }

  handleResize = (event) => {
    this.setState({ size: window.innerWidth });
  };

  handleScroll = (event) => {
    this.moveCards(event, 'wheel');
  };

  moveCards(event, type) {
    console.log(event);
  //   var past = 0;
  //   var offset = 0;
  //   var delta = getDelta(event, type);
  //   if (delta > 0 || delta < 0) {
  //     cards.map(function (card, index) {
  //       var prev = cards[index - 1] || cardZero;
  //       var next = cards[index + 1] || cardLast;
  //       if (!card.top && card.show) {
  //         moveCard(card, delta, prev, next, index);
  //       }
  //       return card;
  //     });
  //   }

  //   function moveCard(card, delta, prev, next, index) {
  //     past = card.offset;
  //     offset = checkOffset(card, delta, prev, next, index);
  //     if (delta > 0) {
  //       offset = checkMaximum(index, offset);
  //     }
  //     if (past !== offset) {
  //       card.offset = offset;
  //       transform(card.node, 'translate3d(0px, ' + offset + 'px, 0px)');
  //     }
  //   }

  //   function checkOffset(card, delta, prev, next, index) {
  //     var result;
  //     if (card.offset - delta + card.height <= windowSize) {
  //       next.show = true;
  //     }
  //     if (delta > 0) {
  //       if (card.offset - delta < card.stackedOffset) {
  //         result = card.stackedOffset;
  //         card.top = true;
  //         var header = document.getElementById('header');
  //         header.style.backgroundColor = colours[index];
  //       } else if (!prev.top && card.offset - delta < prev.height + prev.offset) {
  //         result = prev.height + prev.offset;
  //       } else {
  //         result = card.offset - delta;
  //       }
  //     } else {
  //       if (card.offset - delta >= prev.height + prev.offset) {
  //         result = prev.height + prev.offset;
  //         prev.top = false;
  //         var header = document.getElementById('header');
  //         header.style.backgroundColor = colours[index - 2];
  //       } else {
  //         result = card.offset - delta;
  //       }
  //     }
  //     if (result >= windowSize) {
  //       result = windowSize;
  //       card.show = false;
  //     }
  //     return result;
  //   };

  //   function checkMaximum(cardIndex, offset) {
  //     var heightLeft = cards.reduce(function (prev, next, index) {
  //       if (index > cardIndex - 1) {
  //         return next.height + prev;
  //       }
  //       return prev;
  //     }, 0);
  //     if (heightLeft + offset < windowSize) {
  //       return windowSize - heightLeft;
  //     }
  //     return offset;
  //   }
  }
};

export default App;