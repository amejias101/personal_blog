var app = {}
app.windowWidth = 0;

$(window).on('load resize', function() {
    app.windowWidth = $(window).width();
    console.log(app);
});

$(document).on('scroll load', function(){
    if (app.windowWidth > 499) {
        if ($(window).scrollTop() > 20) {
            $('header').addClass('scrolled')
        } else {
            $('header').removeClass('scrolled')
        }
    }
});

// lightbox initiation
$('figure').on('click', 'img', function(e) {
    e.preventDefault();

    var img_parts = $(this).attr('src').split('-');

    $.magnificPopup.open({
        items: {
            src: img_parts[0] + '-xlarge.' + img_parts[1].split('.')[1]
        },
        type: 'image'
    });
});

if ($('.projects-body').length) {
    $('.title').find('a').on('click', function(e) {
        if (!$(this).hasClass('external_link')) {
            e.preventDefault();
            var index = $(this).index();
            $('html, body').animate({
            scrollTop: $('article').children('h3').eq(index).offset().top - 130
            }, 1000);
        }
    });
}

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );