$(document).ready(function() {
  $.getJSON("vcard.json", function(data) {
    var images = data.images;

    var carousel = $(".carousel");
    images.forEach(function(image) {
      var slide = $("<div>").addClass("carousel-slide");
      var img = $("<img>").attr("src", image).appendTo(slide);
      slide.appendTo(carousel);
    });

    carousel.slick({
      dots: false,
      arrows: false,
      slidesToShow: images.length, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    });
  });
});
