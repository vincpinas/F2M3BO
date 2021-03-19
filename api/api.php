<?php 
    if (strpos($_SERVER['HTTP_HOST'], "ma-cloud.nl")) {
        include('db.live.php');
    } else {
        include('db.local.php');
    }
    include('helpers.php');
?>

<?php
    /*
    * Available request items:
    *   $request_id: number;
    *   $amount: number;
    *   $type: string;
    *   $description: string;
    *   $doc: { created: date; changed: date; }
    *   $creator: { first: string; last: string; }
    */

    header("Content-Type:application/json");

    // Getting the requested data from the data base.
    // TODO: adding a valid table to the data base to fetch data from.
    // TODO: adding data types to show.
    if (isset($_GET['request_id']) && $_GET['request_id'] != "") {
        $request_id = $_GET['request_id'];
        $result = mysqli_query(
            $con,
            "SELECT * FROM `duurzaamdata` WHERE request_id = $request_id"
        );

        if(mysqli_num_rows($result) > 0) {
            fetchData($result, $request_id);
        } else { 
            response($request_id, NULL, NULL, "No Record Found", NULL, NULL, NULL, NULL); 
        }
    } else {
        response($request_id, NULL, NULL, "Invalid Request", NULL, NULL, NULL, NULL);
    }