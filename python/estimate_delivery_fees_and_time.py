import requests

def estimate_delivery_fees_and_time():
    private_key = ''
    url = 'https://logistic.groupngs.com/api/'

    body = {
        "action": "estimateDeliveryFeesAndTime",
        "countryCode": "UG",
        "vehicleType": "DELIVERY_CAB",
        "origin": "[0.29, 32.62]",
        "destination": "[0.33, 32.58]"
    }

    headers = {
        'Authorization': 'Bearer '+ private_key
    }

    req = requests.post(url, data=body, headers=headers)
    req.raise_for_status()
    print(req.json())