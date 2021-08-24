import * as axios from 'axios'

interface NearestDriverDistanceBody {
    action: string,
    countryCode: string,
    vehicleType: string,
    position: Array<number>
}

const nearestDriverDistance = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data: NearestDriverDistanceBody = {
        action: "nearestDriverDistance",
        countryCode: "UG",
        vehicleType: "DELIVERY_CAB",
        position: [0.315133, 32.576353]
    }

    axios.default.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default nearestDriverDistance;