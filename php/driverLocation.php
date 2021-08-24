<?php

function driverLocation(){
    $url = "https://logistic.groupngs.com/api/";
    $private_key = '';

    $headers = array(
        'Authorization: Bearer '.$private_key,
        'Content-Type: application/json'
    );

    $body = array(
        "action" => "driverLocation",
        "requestID" => "7638bae085e...1f24cf80edff1213"
    );

    $req = curl_init($url);
    curl_setopt_array($req, array(
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_POSTFIELDS => json_encode($body)
    ));

    // Send request 
    $res = curl_exec($req);

    // checking errors
    if($res === FALSE){
        die(curl_error($req));
    }

    // get response
    echo json_decode($req, TRUE);
    
    //close
    curl_close($req);
}


?>