import requests

def driver_location():
    private_key = ''
    url = 'https://logistic.groupngs.com/api/'
    body = {
        'action': 'driverLocation',
        'requestID': '7638bae085e...1f24cf80edff1213'
    }

    headers = {
        'Authorization': 'Bearer ' + private_key,
    }

    req = requests.post(url, data=body, headers=headers)
    req.raise_for_status()
    print(req.json())