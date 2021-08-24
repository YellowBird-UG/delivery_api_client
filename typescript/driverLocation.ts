import * as axios from 'axios'

interface DriverLocationBody {
    action: string,
    requestID: string
}

const driverLocation = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data: DriverLocationBody = {
        action: "driverLocation",
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

export default driverLocation;