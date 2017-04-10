$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
$('.map')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
});
