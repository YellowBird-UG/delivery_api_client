const axios = require('axios').default;

const driverLocation = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data = {
        action: "driverLocation",
        requestID: "7638bae085e...1f24cf80edff1213"
    }

    axios.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default driverLocation;