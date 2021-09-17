<?php

function requestStatus(){
    $url = "https://logistic.groupngs.com/api/";
    $private_key = '';

    $headers = array(
        'Authorization: Bearer '.$private_key,
        'Content-Type: application/json'
    );

    $body = array(
        "action" => "directRequestDelivery",
        "countryCode" => "UG",
        "vehicleType" => "DELIVERY_CAB",
        "paymentMode" => "CASH",
        "pickupContactInfo" => array(
            "fullName" => "Wafula Abdalah",
            "phoneNumber" => "77900000",
            "countryCode" => "+256",
            "email" => "email@example.com",
            "gender" => "",
            "description" => "String (OPTIONAL)",
            "addressLatLng" => [0.29, 32.62],
            "addressLabel" => "Acacia Mall",
            "city" => "Kampala",
            "building" => "String (OPTIONAL)",
            "plotNumber" => "String (OPTIONAL)"
        ),
        "dropOffContactInfo" =>  array(
            "fullName" => "Nono",
            "phoneNumber" => "77900000",
            "countryCode" => "+256",
            "email" => "",
            "gender" => "",
            "description" => "String (OPTIONAL)",
            "addressLatLng" => [0.33, 32.58],
            "addressLabel" => "Unknown",
            "city" => "Kampala",
            "building" => "String (OPTIONAL)",
            "plotNumber" => "String (OPTIONAL)"
        )
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