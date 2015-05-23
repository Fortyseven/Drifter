<?php
    if ( !empty( $_SERVER[ 'QUERY_STRING' ] ) ) {
        include( 'snow.php' );
        die;
    }
?>
<html>
<head>
    <title>Drifter - Winter, 8-bit style!</title>
</head>
<body>
<div id="Header">
    <h1>Drifter</h1>
    <h3>Winter, 8-bit style!</h3>
</div>
<div id="Content">
    <form method="get">
        <div>
            <input size="60" type="text" name="url" value="http://www.evilavatar.com/"/>
            <input type="submit" value="Let's Snow"/>
        </div>
        <div>
            <label for="silence">Silence:</label> <input type="checkbox" name="silence"/>
        </div>
    </form>
</div>
</body>
</html>
<!-- MUSIC BY: Gerontius - "Jingle Bells" ( http://www.newgrounds.com/audio/listen/296340 ) -->