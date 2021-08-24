import requests

def request_status():
    private_key = ''
    url = 'https://logistic.groupngs.com/api'
    data = {
        'action': 'requestStatus',
        'requestID': '7638bae085e...1f24cf80edff1213'
    }
    headers = {
        'Authorization': 'Bearer ' +  private_key
    }
    req = requests.post(url, data=data, headers=headers)
    req.raise_for_status()
    print(req.json())