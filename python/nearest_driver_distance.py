import requests

def nearest_driver_distance():
    private_key = ''
    url = 'https://logitist.groupngs.com/api/'

    body = {
        "action": "nearestDriverDistance",
        "countryCode": "UG",
        "vehicleType": "DELIVERY_CAB",
        "position": "[0.315133, 32.576353]"
    }

    headers = {
        'Authorization': 'Bearer ' + private_key
    }

    req = requests.post(url, data=body, headers=headers)
    req.raise_for_status()
    print(req.json())