const NUM_FLAKES = 100;
const FRAME_DELAY = 50;

var get_url = false;
var get_silence = false;

var snow_x = new Array( NUM_FLAKES );
var snow_xvel = new Array( NUM_FLAKES );
var snow_y = new Array( NUM_FLAKES );
var snow_yvel = new Array( NUM_FLAKES );

var snow_size = new Array( NUM_FLAKES );

var window_width = 0, window_height = 0;

var canvas = null;
var ctx = null;

var c = 0; // Incremented each updateMove loop

/************************************************************/
$( document ).ready(
        function ()
        {
            get_url = getQueryVariable( "url" );
            get_silence = getQueryVariable( "silence" );

            if ( get_url != false ) {
                startDrifting();
            }
        }
);


/************************************************************/
function startDrifting()
{
    $( "body" ).remove();

    var body = $( "<body>" );
    body.addClass( "active" );
    $( "html" ).append( body );

    window_width = $( window ).width();
    window_height = $( window ).height();

    var iframe = $( '<iframe border="0" frameborder="0" width="100%" height="100%" spacing="0" padding="0" src="' + decodeURIComponent( get_url ) + '"></iframe>' );

    canvas = $( "<canvas style='position:absolute; z-index:999; top:0; left: 0' width='" + window_width + "' height='" + window_height + "'></canvas>" )[ 0 ];

    body.prepend( iframe )
            .prepend( canvas );


    if ( !get_silence ) {
        var audio = $( '<audio src="assets/music.mp3" autoplay="true" loop="true"/>' );
        body.prepend( audio );
    }

    ctx = canvas.getContext( "2d" );

    for ( var i = 0; i < NUM_FLAKES; i++ ) {
        snow_x[ i ] = Math.round( Math.random() * window_width );
        snow_y[ i ] = Math.round( Math.random() * window_height );
        snow_xvel[ i ] = (5 + (Math.random() * 20));
        snow_yvel[ i ] = (5 + (Math.random() * 20));

        snow_size[ i ] = Math.round( 1 + (Math.random() * 16) );
    }

    setInterval( updateMove, FRAME_DELAY );
}

/************************************************************/
function updateMove()
{
    ctx.clearRect( 0, 0, canvas.width, canvas.height );

    for ( var i = 0; i < NUM_FLAKES; i++ ) {
        var wo = Math.sin( c * 0.1 ) * (Math.random() * 5);

        snow_x[ i ] += (snow_xvel[ i ] + wo);
        if ( snow_x[ i ] > (window_width - snow_size[ i ]) ) {
            snow_x[ i ] = 0;
        }

        snow_y[ i ] += snow_yvel[ i ];
        if ( snow_y[ i ] > (window_height - snow_size[ i ]) ) {
            snow_y[ i ] = 0;
        }

        var x = snow_x[ i ];
        var y = snow_y[ i ];

        // Flickers, but adds kind of a nice twinkle to it. I'll keep it.
        ctx.fillStyle = "rgba(255,255,255," + Math.random() + ")";
        ctx.fillRect( x, y, snow_size[ i ], snow_size[ i ] );
    }
    c++;
}

/************************************************************/
function getQueryVariable( variable )
{
    var query = window.location.search.substring( 1 );
    var vars = query.split( "&" );
    for ( var i = 0; i < vars.length; i++ ) {
        var pair = vars[ i ].split( "=" );
        if ( pair[ 0 ] == variable ) {return pair[ 1 ];}
    }
    return (false);
}
