
$(document).ready(function () {
  $('#myCarousel').carousel({
    //  interval:2000
            //interval: 2000
  });
  $('.small-thumbnail img').click(function () {
    $('#DataDisplay').attr("src", $(this).attr("data-display"));
  });

});
