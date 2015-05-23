<?php

    $site = trim( $_GET[ 'url' ] );

    if ( empty( $site ) ) header( "Location: index.php" );

    //    if ( empty( $_GET[ 'url' ] ) ) {
    //        $site = "http://google.com/";
    //    }
    //    else {
    //        $site = $_GET[ 'url' ];
    //    }
?>


<html>
<head>
    <title>Drifter</title>
    <script type="text/javascript" src="vendor/jquery.js"></script>
    <script type="text/javascript" src="js/drifter.js"></script>
    <style>
        body { margin: 0px; padding: 0px; background: black; }
    </style>
</head>
<body>
<iframe border="0" frameborder="0" noborder="noborder" width="100%" height="100%" spacing="0" padding="0"
        src="<?php echo $site ?>"></iframe>
<?php if ( empty( $_GET[ 'silence' ] ) ): ?>
    <audio src="assets/music.mp3" autoplay="true" loop="true"/>
<?php endif; ?>
</body>
</html>