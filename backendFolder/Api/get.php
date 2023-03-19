<?php
class Get
{
    function __construct()
    {
        $this->checkRequestAction();
    }
    function checkRequestAction()
    {
        // axios send the data in json formate so to read the date we have to decode the data
        $action = $_GET['action'];
        // echo $data ; 
        // $data = json_decode(file_get_contents('php://input'), true);
        // $action = $data['action'];
        switch ($action) {
            case "checkSession":
                // echo "checkSession";
                $this->checkSession();
                break;
            case "getStory":
                // echo "checkSession";
                $this->getStory();
                break;
        }
    }
    function checkSession()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT * FROM session_members WHERE (session_id = '$session_id')";
        // send the query to the database
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            header("HTTP/1.1 200 OK");
            $options = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode(array('message' => 'correct session_id', 'success' => true, 'role' => $options[0]['role']));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password', 'success' => false));
        }
        $conn->close();
    }
    function getStory()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT * FROM stories WHERE (session_id = '$session_id')";
        // send the query to the database
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            header("HTTP/1.1 200 OK");
            // $row = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $row = mysqli_fetch_assoc($result);
            echo json_encode(array('message' => 'getting story', 'success' => true, 'story' => $row['name']));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password', 'success' => false));
        }
        $conn->close(); 
    }
    // function checkMembers(){
    //     echo "done";
    //     require_once( "connection/connection.php");
    // echo "hello";
    // if ($this->id  == null){
    //     $sql = "SELECT * FROM users";
    //     $result = $conn->query($sql);
    //     $data = array();
    //     if ($result->num_rows > 0) {
    //         while($row = $result->fetch_assoc()) {
    //             $data[] = $row;
    //         }
    //         echo json_encode($data);
    //     }else{
    //         echo json_encode(array('message' => 'No contact forms found'));
    //     }
    // }else{
    //     $sql = "SELECT * FROM users WHERE id=$this->id";
    //     $result = $conn->query($sql);
    //     if ($result->num_rows > 0) {
    //         $row = mysqli_fetch_assoc($result);
    //         echo json_encode($row);
    //     }else{
    //         echo json_encode(array('message' => 'No contact forms found'));
    //     }
    // }
    // }


    // member table 
}
