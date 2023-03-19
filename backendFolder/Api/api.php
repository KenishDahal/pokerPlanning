<?php
namespace Api;

use Get;
use Post;
include "post.php";
include "get.php";
class api{
    private $requestName;

    function __construct($request){
        $this->requestName = $request;
        // $this->id =$id;
        $this->request();
    }
    function request(){
        header('Content-Type: application/json');
        switch($this->requestName){
            case "POST":
                new Post();
                break;
            case "GET":
                new Get();
                break;
            default:
            echo "make";
                // $this->notFoundPage();
        }
    }
    
}
?>