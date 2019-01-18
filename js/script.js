$(document).ready(function () {
    $( '#avatar' ).click(function() {
        let link = $(this).attr('src');
        $('#popup').show();
        $('#avatar-wrap').html('').append( '<img class="popup-avatar" src='+link+'>' );
        $('#overlay').show();
    
    });

    $( '#popup-close' ).click(function() {
        $( '#popup' ).hide();
        $('#overlay').hide();
    });
});