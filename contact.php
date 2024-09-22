<?php

$name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["phoneNumber"];
$message = $_POST["message"];

 $server = "localhost";
 $user = "root";
 $password = "";
 $db_name = "project";

 $con = mysqli_connect($server, $user, $password, $db_name);

 $sql = "INSERT INTO event_planner (name, phone_Number, Email, Message) 
 values ('$name', '$number', '$email', '$message')";
 
 $r = mysqli_query($con, $sql);

 if ($r) {
    echo "Thanks for your message" . "<br>" . "<button onclick=\"location.href='index.html'\">Click here to back home page</button>";
 } else {
    echo "Message failed";
 }

 /*

 if (!$con) {
    die("Connection failed:" . mysqli_connect_error());
 } else {
    $sql = " INSERT INTO event_planner (Name, Phone_Number, Email, Message)
    values ('$name', '$number', '$email', '$message')";

    if(mysqli_query($con, $sql)) {
        echo "Data successfully inserted";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
 }
    */

?>