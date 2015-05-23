<?php
    $site = trim( $_GET[ 'url' ] );

    if ( empty( $site ) ) header( "Location: index.php" );
?>


<html>
<head>
    <title>Drifter</title>
    <script type="text/javascript" src="vendor/jquery.js"></script>
    <script type="text/javascript" src="js/drifter.js"></script>
    <style>
        body { margin: 0; padding: 0; background: transparent; }
        canvas { pointer-events: none; }
    </style>
</head>
<body>
<iframe border="0" frameborder="0" width="100%" height="100%" spacing="0" padding="0"
        src="<?php echo $site ?>"></iframe>
</body>
</html>