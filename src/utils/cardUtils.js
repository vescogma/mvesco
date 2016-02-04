export function initializeCards(windowHeight, cards) {
  const cardState = Array.from(cards).map((card, index) => {
    const cardHeight = card.offsetHeight;
    return {
      height: cardHeight,
      show: false,
      top: false,
      min: cardHeight > windowHeight ? windowHeight - cardHeight : 0,
    };
  });
  cardState.reduce(function (prev, next) {
    var target = windowHeight;
    if (prev < windowHeight) {
      target = prev;
      next.show = true;
    }
    next.offset = target;
    return target + next.height;
  }, 0);
  return cardState;
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

export function calculateNextCards(cards, delta, windowSize) {
  const cardZero = { height: 0, offset: 0, show: true, top: true, min: 0 };
  const cardLast = { height: 0, offset: 0, show: false, top: false, min: 0 };
  return cards.map(function (card, index) {
    let newCard = card;
    if (card.show && !card.top) {
      const prev = cards[index - 1] || cardZero;
      const next = cards[index + 1] || cardLast;
      newCard = moveCard(card, delta, prev, next, index);
    }
    return newCard;
  });

  function moveCard(card, delta, prev, next, index) {
    const newCard = checkOffset(card, delta, prev, next, index);
    if (delta > 0) {
      newCard.offset = checkMaximum(index, card.offset);
    }
    return newCard;
  };

  function checkOffset(card, delta, prev, next, index) {
    const newCard = card;
    if (card.offset - delta + card.height <= windowSize) {
      next.show = true;
    }
    if (delta > 0) {
      // SCROLL DOWN
      const abovePrevCardBottom = !prev.top
        && card.offset - delta < prev.height + prev.offset;
      if (card.offset - delta < card.min) {
        newCard.offset = card.min;
        if (index < cards.length - 1) {
          newCard.top = true;
        }
      } else if (abovePrevCardBottom) {
        newCard.offset = prev.height + prev.offset;
      } else {
        newCard.offset = card.offset - delta;
      }
    } else {
      // SCROLL UP
      if (card.offset - delta >= prev.height + prev.offset) {
        newCard.offset = prev.height + prev.offset;
        prev.top = false;
      } else {
        newCard.offset = card.offset - delta;
      }
    }
    if (newCard.offset >= windowSize) {
      newCard.offset = windowSize;
      newCard.show = false;
    }
    return newCard;
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
  };
}
