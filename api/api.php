<?php include('db.php'); ?>

<?php
    // Function taking in all the requested data and enconding it to json.
    function response($request_id, $amount, $type, $response_desc) {
        $response['request_type'] = $type;
        $response['request_id'] = $request_id;
        $response['amount'] = $amount;
        $response['response_desc'] = $response_desc;
        
        $json_response = json_encode($response);
        echo $json_response;
    }

    header("Content-Type:application/json");

    // Getting the requested data from the data base.
    if (isset($_GET['request_id']) && $_GET['request_id']!="") {
        $request_id = $_GET['request_id'];
        $result = mysqli_query(
            $con,
            "SELECT * FROM `users` WHERE request_id=$request_id"
        );
        if(mysqli_num_rows($result)>0) {
            $row = mysqli_fetch_array($result);
            $amount = $row['amount'];
            $type = $row['type'];
            $response_desc = $row['response_desc'];
            response($request_id, $amount, $type, $response_desc);
            mysqli_close($con);
        } else {
            response(NULL, NULL, NULL, "No Record Found");
        }
    } else {
        response(NULL, NULL, NULL, "Invalid Request");
    }
?>