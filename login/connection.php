<?php

$dbhost = "127.0.0.1";
$dbuser = "c6446dhuis";
$dbpass = "tb@aGiEp3JD";
$dbname = "c6446dhuis";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
