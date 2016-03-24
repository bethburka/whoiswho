/**
 * Created by bethelehem.burka on 24/03/16.
 */
$('button').click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
});