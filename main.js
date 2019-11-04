
var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    prevNextButtons: false,
    pageDots: true,
    cellAlign: 'left'
  });
  
  var $imgs = $carousel.find('.carousel-cell .port-img img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

  var number = document.getElementsByClassName("number");

  $carousel.on( 'change.flickity', function( event, index ) {
    console.log( 'Slide changed to ' + index );
    $(".number .change").html(index+1);

    if(index=2){
      number.style.marginLeft= '48%';
     }
    

  });



/* 
  var $port = $carousel.find('.carousel-cell .port-img');
  $carousel.on( 'dragStart.flickity', function( event, pointer ) {

    $(".carousel-cell .port-img").height('50px');

  });
 */

  