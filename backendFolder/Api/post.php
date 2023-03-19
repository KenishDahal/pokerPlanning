<?php
class Post
{
    function __construct()
    {
        $this->checkRequestAction();
    }
    function checkRequestAction()
    {
        // axios send the data in json formate so to read the date we have to decode the data
        $data = json_decode(file_get_contents('php://input'), true);

        // print_r($data['action']);
        // echo $data['action'];
        //    exit;
        $action = $data['action'];

        switch ($action) {
            case "signUp":
                echo "signup";
                $this->signupAction();
                break;
            case "logIn":
                $this->LogInAction();
                break;
            case "session":
                $this->sessionAction();
                break;
            case "membersIdentify":
                $this->memberCreate();
                break;
            case "addStory":
                echo "asss";
                $this->addStory();
                break;
        }
    }

    function signUpAction()
    {
        require_once("connection/connection.php");
        $data = json_decode(file_get_contents('php://input'), true);
        $fullName = $data['fullName'];
        $email = $data['email'];

        $password = password_hash($data['password'], true);
        $sql = "INSERT INTO users (fullname,email,password)
            VALUES ('$fullName','$email','$password')";
        // send the query to the database
        $result = $conn->query($sql);
        // check the connection of the database
        if ($result === TRUE) {
            header("HTTP/1.1 201 Created");
            echo json_encode(array('message' => 'submitted successfully'));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }
        // close the database connection
        $conn->close();
    }

    function logInAction()
    {
        require_once("connection/connection.php");
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'];
        $password = $data['password'];
        $sql = "SELECT * FROM users WHERE (email = '$email')";
        // send the query to the database
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = mysqli_fetch_assoc($result);
            if (is_array($row)) {
                if (password_verify($password, $row['password'])) {
                    header("HTTP/1.1 200 OK");
                    echo json_encode(array('message' => 'successfully logged in!!', 'success' => true, 'user' => $row));
                } else {
                    header("HTTP/1.1 400 Bad Request");
                    echo json_encode(array('message' => 'Invalid email or password', 'success' => false));
                }
            }
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password'));
        }
        $conn->close();
    }

    function sessionAction()
    {
        require_once("connection/connection.php");
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];
        $moderator_id = $data['moderator_id'];

        $session_id_query = "SELECT UUID() as uuid";
        $session_id_result = $conn->query($session_id_query);
        $id_value = mysqli_fetch_assoc($session_id_result);
        $session_id = $id_value['uuid'];

        if (empty($data['name'])) {
        } else {
            $sql = "INSERT INTO `sessions` (`id`, `name`, `moderator_id`) VALUES ('$session_id', '$name','$moderator_id')";

            // send the query to the database
            $result = $conn->query($sql);
            // print_r($result);
            // exit;
            // check the connection of the database
            if ($result === TRUE) {
                header("HTTP/1.1 201 Created");
                echo json_encode(array('message' => 'submitted successfully', 'success' => true, 'sessionId' => $session_id));
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            // close the database connection
            $conn->close();
        }
    }

    // member table 
    function memberCreate()
    {
        require_once("connection/connection.php");
        $data = json_decode(file_get_contents('php://input'), true);

        $member_id = $data['member_id'];
        $session_id = $data['session_id'];

        if (empty($data['member_id'])) {
        } else {
            $sql = "INSERT INTO `session_members` (`member_id`, `session_id`, `role`) VALUES ('$member_id','$session_id','moderator')";

            // send the query to the database
            $result = $conn->query($sql);
            // print_r($result);
            // exit;
            // check the connection of the database
            if ($result === TRUE) {
                header("HTTP/1.1 201 Created");
                echo json_encode(array('message' => 'submitted member successfully', 'success' => true, 'sessionId' => $session_id));
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            // close the database connection
            $conn->close();
        }
    }

    function addStory()
    {
        require_once("connection/connection.php");
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];
        $description = $data['description'];
        $session_id = $data['session_id'];

        // $sql = "INSERT INTO stories (session_id,name,description,status)
        //     VALUES ('$session_id',$name','$description','active')";
        $sql = "INSERT INTO `stories` (`session_id`, `name`, `description`,`status`) VALUES ('$session_id','$name','$description','active')";

        // send the query to the database
        $result = $conn->query($sql);
        // check the connection of the database
        if ($result === TRUE) {
            header("HTTP/1.1 201 Created");
            echo json_encode(array('message' => 'submitted successfully','change'=>true));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }
        // close the database connection
        $conn->close();
    }
}
