import requests

def direct_request_delivery():
    private_key = ''
    url = 'https://logistic.groupngs.com/api/'
    body = {
        "action": "directRequestDelivery",
        "countryCode": "UG",
        "vehicleType": "DELIVERY_CAB",
        "paymentMode": 'CASH',
        "pickupContactInfo": {
            "fullName": "Wafula Abdalah",
            "phoneNumber": "77900000",
            "countryCode": "+256",
            "email": "email@example.com",
            "gender": "",
            "description": "String (OPTIONAL)",
            "addressLatLng": "[0.29, 32.62]",
            "addressLabel": "Acacia Mall",
            "city": "Kampala",
            "building": "String (OPTIONAL)",
            "plotNumber": "String (OPTIONAL)"
        },
        "dropOffContactInfo": {
            "fullName": "Nono",
            "phoneNumber": "77900000",
            "countryCode": "+256",
            "email": "",
            "gender": "",
            "description": "String (OPTIONAL)",
            "addressLatLng": "[0.33, 32.58]",
            "addressLabel": "Unknown",
            "city": "Kampala",
            "building": "String (OPTIONAL)",
            "plotNumber": "String (OPTIONAL)"
        }
    }

    headers =  {
        'Authorization': 'Bearer ' + private_key
    }
    
    req = requests.post(url, data=body, headers= headers)
    print(req.json())