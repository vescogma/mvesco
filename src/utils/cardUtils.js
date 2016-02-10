export function initializeCards(nodes, size) {
  const cards = calculateHeights(nodes, size);
  cards.reduce(function (prev, next, index) {
    cards[index].top = false;
    if (prev < size) {
      cards[index].offset = prev;
      cards[index].show = true;
    } else {
      cards[index].offset = size;
      cards[index].show = false;
    }
    return cards[index].offset + next.height;
  }, 0);
  return cards;
}

export function setHeights(cards, nodes, size) {
  const heights = calculateHeights(nodes, size);
  return cards.map((card, index) => {
    card.height = heights[index].height;
    card.min = heights[index].min;
    return card;
  });
}

export function calculateHeights(nodes, size) {
  return nodes.map((card, index) => {
    const height = card.offsetHeight;
    return {
      height: height,
      min: height > size ? size - height : 0,
    };
  });
}

export function getDelta(event, type, touches, addTouch) {
  switch (type) {
    case 'touch':
      var last = touches[touches.length - 1].y;
      addTouch({ y: event.clientY, stamp: Date.now() });
      return last - event.clientY;
    case 'wheel':
      return event.deltaY;
    case 'offset':
    default:
      return event;
  }
}

export function calculateCards(cards, delta, size) {
  const cardZero = { height: 0, offset: 0, show: true, top: true, min: 0 };
  const cardLast = { height: 0, offset: 0, show: false, top: false, min: 0 };
  return cards.map((card, index) => {
    if (card.show && !card.top) {
      const prev = cards[index - 1] || cardZero;
      const next = cards[index + 1] || cardLast;
      if (card.offset - delta + card.height <= size) {
        next.show = true;
      }
      if (delta > 0) {
        card = deltaPos(card, delta, prev, index, size, cards);
      } else {
        card = deltaNeg(card, delta, prev, size);
      }
    }
    return card;
  });
}

function deltaPos(card, delta, prev, index, size, cards) {
  card.offset = scrollDown(card, delta, prev, index, cards.length);
  if (card.offset >= size) {
    card.offset = size;
    card.show = false;
  }
  card.offset = checkMaximum(index, card.offset, size, cards);
  return card;
}

function deltaNeg(card, delta, prev, size) {
  card.offset = scrollUp(card, delta, prev);
  if (card.offset >= size) {
    card.offset = size;
    card.show = false;
  }
  return card;
}

function scrollDown(card, delta, prev, index, length) {
  if (card.offset - delta < card.min) {
    if (index < length - 1) {
      card.top = true;
    }
    return card.min;
  } else if (!prev.top && card.offset - delta < prev.height + prev.offset) {
    return prev.height + prev.offset;
  }
  return card.offset - delta;
}

function scrollUp(card, delta, prev) {
  if (card.offset - delta >= prev.height + prev.offset) {
    prev.top = false;
    return prev.height + prev.offset;
  }
  return card.offset - delta;
}

function checkMaximum(cardIndex, offset, size, cards) {
  var total = cards.reduce((prev, next, index) => {
    if (index > cardIndex - 1) {
      return next.height + prev;
    }
    return prev;
  }, 0);
  if (total + offset < size) {
    return size - total;
  }
  return offset;
}
