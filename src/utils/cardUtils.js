export function initializeCards(windowHeight, cards) {
  const cardState = Array.from(cards).map((card, index) => {
    const cardHeight = card.offsetHeight;
    return {
      height: cardHeight,
      show: false,
      top: false,
      stackedOffset: cardHeight > windowHeight ? windowHeight - cardHeight : 0,
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