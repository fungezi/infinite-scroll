
var msnry = new Masonry( '.grid', {
  itemSelector: 'none', // select no images on init
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  visibleStyle: {
    transform: 'translateY(0)',
    opacity: 1
  },
  hiddenStyle: {
    transform: 'translateY(100px)',
    opacity: 0,
  }
});

imagesLoaded( '.grid', function() {
  msnry.options.itemSelector = '.grid__item'; // select proper items
  document.querySelector('.grid').classList.add('are-images-ready');
  var items = document.querySelectorAll('.grid__item');
  msnry.appended( items );
});

var infScroll = new InfiniteScroll( '.grid', {
  path: '.pagination__next',
  append: '.grid__item',
  log: true,
  outlayer: msnry,
  status: '.scroll-status',
  scrollThreshold: 1,
});
