/**
 * Created by bethelehem.burka on 21/03/16.
 */

(function( $ ){
    $('#toggle-menu').on('touchstart click', function(e)
    {
        e.preventDefault();

        var $body = $('body');
        var $page= $('#page');
        var $menu = $('#menu');

        transitionEnd = 'transtionend webkitTransitionEnd otransitionend MSTransitionEnd';
        $body.addClass('animating');

        if ($body.hasClass('menu-visable')){
            $body.addClass('right');
        }
        else{
            $body.addClass('left');
        }

        $page.on(transitionEnd, function(){
            $body
                .removeClass('animating left right')
                .toggleClass('menu-visible');
            $page.off(transitionEnd);

        });
    });
})(jQuery);
