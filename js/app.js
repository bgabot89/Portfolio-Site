$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// window.onload = function(){
//
// TweenLite.to('.para', 1, {right: '200px', ease:Back.easeInOut});
// // TweenLite.to('#bubble', 1, {right: '340px', ease:Back.easeInOut});
// // TweenLite.to('#logo', 1, {right: '340px', ease:Back.easeInOut});
// };
