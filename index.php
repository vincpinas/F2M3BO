<?php 
session_start();

	include("login/connection.php");
	include("login/functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/favicon.ico" />
    <title>Duurzaam Huis</title>

    <!--Style Sheets-->
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

    <!--Scripts-->
    <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js"></script>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script type="module" src="js/App.js" defer></script>
    <script type="module" src="js/index.js" defer></script>
</head>
<body>
    <div id="c-alert-container" class="c-alert-container">
        <div id="alertContent" class="c-alert">
            <p>{ Alert Component }</p>
        </div>
    </div>
    <main>
        <div class="c-sidebar">
            <div class="s-userDetails">
                { userInfo Component }
            </div>
            <div class="s-linkList">
                <a rel="noreffer" href="#" class="s-link" id="dashboard"><i class="fas fa-chart-pie"></i>Dashboard</a>
                <a rel="noreffer" href="#" class="s-link" id="controlPanel"><i class="fas fa-gamepad"></i>Control Panel</a>
                <a rel="noreffer" href="#" class="s-link" id="contact"><i class="fas fa-address-card"></i>Contact</a>
                <a href="login/logout.php" class="s-link" id="logout"><i class="fas fa-sign-out-alt"></i>Logout</a>
            </div>
        </div>
        <div class="content-con">
            <div class="widget" id="widget1">

            </div>
            <div class="widget">
                <div class="widgetContent toolItem" id="widget2">
                    <div class="tooltip"></div>
                </div>
            </div>
            <div class="widget">
                <div class="widgetContent toolItem" id="widget3">
                    <div class="tooltip">Widget</div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>