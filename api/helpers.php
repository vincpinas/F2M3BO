<?php
    // Function taking in all the requested data and enconding it to json.
    function response($request_id, $amount, $type, $description, $dcreate, $dchange, $fname, $lname) {
        // Putting all the data together in a object.
        $response['request_id'] = $request_id;
        $response['request_type'] = $type;
        $response['amount'] = $amount;
        $response['description'] = $description;
        $response['doc'] = ["created" => $dcreate, "changed" => $dchange];
        $response['creator'] = ["first" => $fname, "last" => $lname];
        
        // turning the data to json and setting it ready for use.
        $json_response = json_encode($response);
        echo $json_response;
    }

    // Function to fetch the requested data from the data base.
    function fetchData($result, $request_id) {
        // Fetching all the data from database.
        $row = mysqli_fetch_array($result);

        // Preparing the data from the database.
        $amount = $row['amount'];
        $type = $row['type'];
        $description = $row['description'];
        $dcreate = $row['created'];
        $dchange = $row['changed'];
        $fname = $row['first'];
        $lname = $row['last'];

        // Response function to prepare the sent data to be fetched in the frontend at a later date.
        response(
            $request_id, $amount, $type, $description, $dcreate, $dchange, $fname, $lname
        );

        // Close the MySQL connection
        mysqli_close($con);
    }