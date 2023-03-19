<?php

$host = "localhost";
$dbname = "pokerplanning";
$username = "root";
$password = "root";


$conn = new mysqli(  $host,
                     $username,
                     $password,
                     $dbname,
                    );
                     
if ($conn->connect_errno) {
    die("Connection error: " . $conn->connect_error);
}

return $conn;

// <?php
// $serverName = "localhost";
// $username = "root";
// $password = "yukesh";
// $database = "pokerplanning";
// $port = 4040;
// // Create connection
// $conn = new mysqli($serverName, $username, $password,$database,$port);
// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// ?>