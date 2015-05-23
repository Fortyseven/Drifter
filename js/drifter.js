const NUM_FLAKES = 100;
const FRAME_DELAY = 75;

var xpos = 50;
var fg = null, fg2 = null;

var snow_x = new Array( NUM_FLAKES );
var snow_xvel = new Array( NUM_FLAKES );
var snow_y = new Array( NUM_FLAKES );
var snow_yvel = new Array( NUM_FLAKES );
var snow_div = new Array( NUM_FLAKES );
var snow_size = new Array( NUM_FLAKES );
var snow_twist = new Array( NUM_FLAKES );
var c = 0;
var width = 0, height = 0;

var ctx = null;
var canvas = null;

$( document ).ready( function ()
{
    width = $( window ).width();
    height = $( window ).height();

    canvas = $( "<canvas style='position:absolute; z-index:999; top:0; left: 0' width='" + width + "' height='" + height + "'></canvas>" )[ 0 ];

    $( "body" ).prepend( canvas );

    ctx = canvas.getContext( "2d" );

    for ( var i = 0; i < NUM_FLAKES; i++ ) {
        snow_x[ i ] = Math.round( Math.random() * width );
        snow_y[ i ] = Math.round( Math.random() * height );
        snow_xvel[ i ] = (5 + (Math.random() * 20));
        snow_yvel[ i ] = (5 + (Math.random() * 20));

        snow_size[ i ] = Math.round( 1 + (Math.random() * 16) );

        snow_twist[ i ] = 0;
    }

    setInterval( updateMove, FRAME_DELAY );
} );

function updateMove()
{
    var ox, oy, wo;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for ( var i = 0; i < NUM_FLAKES; i++ ) {
        wo = Math.sin( c * 0.1 ) * (Math.random() * 5);

        snow_x[ i ] += (snow_xvel[ i ] + wo);
        if ( snow_x[ i ] > (width - snow_size[ i ]) ) {
            snow_x[ i ] = 0;
        }

        snow_y[ i ] += snow_yvel[ i ];
        if ( snow_y[ i ] > (height - snow_size[ i ]) ) {
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