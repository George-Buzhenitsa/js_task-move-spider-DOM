'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.matches('.wall')) {
    spider.style.top = moveSpider(e.offsetY);
    spider.style.left = moveSpider(e.offsetX);
  }

  function moveSpider(direction) {
    // const borderSize = wall.offsetWidth % wall.clientHeight;
    const edge = wall.clientHeight - spider.clientHeight;

    if (direction >= edge) {
      return edge + 'px';
    } else if (direction <= spider.clientHeight) {
      return 0 + 'px';
    }

    return direction - spider.clientHeight / 2 + 'px';
  }
});
