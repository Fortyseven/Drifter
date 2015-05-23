<?php
    if ( !empty( $_SERVER[ 'QUERY_STRING' ] ) ) {
        include( 'snow.php' );
        die;
    }
?>
<html>
<head>
    <title>Drifter - Winter, 8-bit style!</title>
    <link type="text/css" rel="stylesheet" href="assets/style.css">
</head>
<body>
<div id="Header">
    <div>Drifter</div>
    <div class="subheading">Winter, 8-bit style!</div>
</div>
<div id="Content">
    <form method="get">
            <label>
                <span>URL</span>
                <input type="text" name="url" placeholder="http://..." value="http://EvilAvatar.com/"/>
            </label>
            <label>
                <span>No Music</span>
                <input type="checkbox" name="silence"/>
            </label>
            <div class="form_submit"><input type="submit" value="Let It Snow!"/></div>
    </form>
</div>
</body>
</html>
<!-- MUSIC BY: Gerontius - "Jingle Bells" ( http://www.newgrounds.com/audio/listen/296340 ) -->