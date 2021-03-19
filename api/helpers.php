<?php
    // Function taking in all the requested data and enconding it to json.
    function response(
        $request_id, $price, $type, $description, $dcreate, $dchange, $fname, $lname,
        $usage_total, $usage_gpu, $usage_cpu, $usage_mboard,
        $temp_bfix, $temp_afix
        ) {
        // Putting all the data together in a object.
        $response['request_id'] = $request_id;
        $response['request_type'] = $type;
        $response['price'] = $price;
        $response['description'] = $description;
        $response['doc'] = ["created" => $dcreate, "changed" => $dchange];
        $response['creator'] = ["first" => $fname, "last" => $lname];
        $response['power_usage'] = ["total" => $usage_total, "gpu" => $usage_gpu, "cpu" => $usage_cpu, "motherboard" => $usage_mboard];
        $response['tempatures'] = ["before" => $temp_bfix, "after" => $temp_afix];
        
        // turning the data to json and setting it ready for use.
        $json_response = json_encode($response);
        echo $json_response;
    }

    // Function to fetch the requested data from the data base.
    function fetchData($result, $request_id) {
        // Fetching all the data from database.
        $row = mysqli_fetch_array($result);

        // Preparing the data from the database.
        $price = $row['price'];
        $type = $row['type'];
        $description = $row['description'];
        $dcreate = $row['created'];
        $dchange = $row['changed'];
        $fname = $row['first'];
        $lname = $row['last'];
        $usage_total = $row['utotal'];
        $usage_gpu = $row['ugpu'];
        $usage_cpu = $row['ucpu'];
        $usage_mboard = $row['umother'];
        $temp_bfix = $row['tbfix'];
        $temp_afix = $row['tafix'];

        // Response function to prepare the sent data to be fetched in the frontend at a later date.
        response(
            $request_id, $price, $type, $description, $dcreate, $dchange, $fname, $lname,
            $usage_total, $usage_gpu, $usage_cpu, $usage_mboard,
            $temp_bfix, $temp_afix
        );

        // Close the MySQL connection
        mysqli_close($con);
    }