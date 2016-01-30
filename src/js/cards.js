var cards = [];
var tracker = -1;
var lastTouches = []
var interruptAnimation = false;
var colours = ['#ff4136', '#0074d9', '#b10dc9', '#ffffff', '#ffffff'];
var windowSize = window.innerHeight;
var cardZero = {
  height: 0,
  offset: 0,
  show: true,
  top: true,
  stackedOffset: 0,
}
var cardLast = {
  height: 0,
  offset: 0,
  show: false,
  top: false,
  stackedOffset: 0,
}

window.onload = initialize;

function getCards() {
  var cards = Array.from(document.getElementsByName('c-card'));
  return cards.map(function (card, index) {
    var height = card.offsetHeight;
    return {
      node: card,
      height: height,
      show: false,
      top: false,
      stackedOffset: height > windowSize ? windowSize - height : 0,
    }
  });
}

function initialize() {
  cards = getCards();
  cards.reduce(function (prev, next) {
    var target = windowSize;
    if (prev < windowSize) {
      target = prev;
      next.show = true;
    }
    next.offset = target;
    transform(next.node, 'translate3d(0px, ' + target + 'px, 0px)');
    return target + next.height;
  }, 0);
  document.getElementById('c-wrap').style.visibility = 'visible';
}

function transform(node, transformProp){
  node.style.WebkitTransform = transformProp;
  node.style.MozTransform = transformProp;
  node.style.msTransform = transformProp;
  node.style.OTransform = transformProp;
  node.style.transform = transformProp;
}

function addTouch(touch) {
  lastTouches.push(touch);
  if (lastTouches.length > 5) {
    lastTouches.splice(0, lastTouches.length - 5);
  }
}

function getDelta(event, type) {
  switch (type) {
    case 'touch':
      var last = lastTouches[lastTouches.length - 1].y;
      addTouch({ y: event.clientY, stamp: Date.now() });
      return (last || event.clientY ) - event.clientY;
    case 'wheel':
      return event.deltaY;
    case 'offset':
    default:
      return event;
  }
}

function onMove(event, type) {
  var past = 0;
  var offset = 0;
  var delta = getDelta(event, type);
  if (delta > 0 || delta < 0) {
    cards.map(function (card, index) {
      var prev = cards[index - 1] || cardZero;
      var next = cards[index + 1] || cardLast;
      if (!card.top && card.show) {
        moveCard(card, delta, prev, next, index);
      }
      return card;
    });
  }

  function moveCard(card, delta, prev, next, index) {
    past = card.offset;
    offset = checkOffset(card, delta, prev, next, index);
    if (delta > 0) {
      offset = checkMaximum(index, offset);
    }
    if (past !== offset) {
      card.offset = offset;
      transform(card.node, 'translate3d(0px, ' + offset + 'px, 0px)');
    }
  }

  function checkOffset(card, delta, prev, next, index) {
    var result;
    if (card.offset - delta + card.height <= windowSize) {
      next.show = true;
    }
    if (delta > 0) {
      if (card.offset - delta < card.stackedOffset) {
        result = card.stackedOffset;
        card.top = true;
      } else {
        result = card.offset - delta;
      }
    } else {
      if (card.offset - delta >= prev.height + prev.offset) {
        result = prev.height + prev.offset;
        prev.top = false;
      } else {
        result = card.offset - delta;
      }
    }
    if (result >= windowSize) {
      result = windowSize;
      card.show = false;
    }
    return result;
  };

  function checkMaximum(cardIndex, offset) {
    var heightLeft = cards.reduce(function (prev, next, index) {
      if (index > cardIndex - 1) {
        return next.height + prev;
      }
      return prev;
    }, 0);
    if (heightLeft + offset < windowSize) {
      return windowSize - heightLeft;
    }
    return offset;
  }
}

function onResize() {
  windowSize = window.innerHeight;
  initialize();
}

function onTouch(touch, direction) {
  switch (direction) {
    case 'start':
      addTouch({ y: touch.clientY, stamp: Date.now() });
      break;
    case 'end':
      onRelease(lastTouches);
      lastTouches = [];
      break;
    default:
      lastTouches = [];
  }
}

function onRelease(touches) {
  var velocity = 0;
  touches.reduce(function (prev, next) {
    var elapsed = next.stamp - prev.stamp;
    var delta = next.y - prev.y;
    var v = 1000 * delta / (1 + elapsed);
    velocity = 0.8 * v + 0.2 * velocity;
    return next;
  })
  if (velocity > 50 || velocity < -50) {
    scrollTo(-velocity);
  }
}

function scrollTo(velocity, target) {
  var amplitude, start, target;
  var moved = 0;
  if (!target) {
    amplitude = 0.6 * velocity;
    target = Math.round(amplitude);
  } else {
    amplitude = 1000;
  }
  start = Date.now();
  interruptAnimation = false;
  requestAnimationFrame(animateRelease);

  function animateRelease() {
    if (!interruptAnimation) {
      var elapsed = Date.now() - start;
      var remainder = -amplitude * Math.exp(-elapsed / 325);
      var toMove = target + remainder - moved;
      if (remainder > 1 || remainder < -1) {
        moved = target + remainder;
        onMove(Math.round(toMove), 'offset');
        requestAnimationFrame(animateRelease);
      } else {
        onMove(Math.round(remainder), 'offset');
      }
    }
  }
}

window.addEventListener('resize', function(event){
  interruptAnimation = true;
  onResize();
});
window.addEventListener('wheel', function(event){
  interruptAnimation = true;
  onMove(event, 'wheel');
});
window.addEventListener('touchstart', function(event){
  event.preventDefault();
  interruptAnimation = true;
  onTouch(event.touches[0], 'start');
});
window.addEventListener('touchmove', function(event){
  event.preventDefault();
  onMove(event.touches[0], 'touch');
});
window.addEventListener('touchend', function(event){
  event.preventDefault();
  onTouch(event.changedTouches[0], 'end');
});