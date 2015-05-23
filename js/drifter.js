var xpos = 50;
var fg = null, fg2 = null;
var NSNOW = 100;

var snow_x = new Array( NSNOW );
var snow_xvel = new Array( NSNOW );
var snow_y = new Array( NSNOW );
var snow_yvel = new Array( NSNOW );
var snow_div = new Array( NSNOW );
var snow_size = new Array( NSNOW );
var snow_twist = new Array( NSNOW );
var c = 0;
var width = 0, height = 0;

$( document ).ready( function ()
{
    width = $( window ).width();
    height = $( window ).height();

    for ( var i = 0; i < NSNOW; i++ ) {
        snow_x[ i ] = Math.round( Math.random() * width );
        snow_y[ i ] = Math.round( Math.random() * height );
        snow_xvel[ i ] = (5 + (Math.random() * 20));
        snow_yvel[ i ] = (5 + (Math.random() * 20));

        snow_size[ i ] = Math.round( 1 + (Math.random() * 16) );

        snow_twist[ i ] = 0;

        $( "body" ).append( "<div id='SnowFlake" + i + "'><!-- --></div>" );
        snow_div[ i ] = $( document ).find( "#SnowFlake" + i );

        snow_div[ i ].css( "position", "absolute" );
        snow_div[ i ].css( "top", "0" );
        snow_div[ i ].css( "left", "0" );
        snow_div[ i ].css( "width", snow_size[ i ] );
        snow_div[ i ].css( "height", snow_size[ i ] );
        snow_div[ i ].css( "background", "white" );
        snow_div[ i ].css( "opacity", Math.random() * 1 );
    }

    setInterval( "updateMove()", 50 );
} );

function updateMove()
{
    var ox, oy, wo;

    for ( var i = 0; i < NSNOW; i++ ) {
        wo = Math.sin( c * 0.1 ) * (Math.random() * 5);

        snow_x[ i ] += (snow_xvel[ i ] + wo);
        if ( snow_x[ i ] > (width - snow_size[ i ]) ) {
            snow_x[ i ] = 0;
        }

        snow_y[ i ] += snow_yvel[ i ];
        if ( snow_y[ i ] > (height - snow_size[ i ]) ) {
            snow_y[ i ] = 0;
        }


        snow_div[ i ].css( "left", snow_x[ i ] );
        snow_div[ i ].css( "top", snow_y[ i ] );
    }
    c++;
}