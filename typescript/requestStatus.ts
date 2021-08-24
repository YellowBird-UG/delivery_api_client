import * as axios from 'axios'

interface RequestStatus {
    action: string,
    requestID: string,
}

const requestStatus = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data: RequestStatus = {
        action: "requestStatus",
        requestID: "7638bae085e...1f24cf80edff1213"
    }

    axios.default.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default requestStatus;