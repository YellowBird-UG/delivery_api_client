import * as axios from 'axios'

interface EstimateDeliveryFeesBody {
    action: string,
    countryCode: string,
    vehicleType: string,
    origin: Array<number>,
    destination: Array<number>
}

const estimateDeliveryFeesAndTime = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data: EstimateDeliveryFeesBody = {
        action: "estimateDeliveryFeesAndTime",
        countryCode: "UG",
        vehicleType: "DELIVERY_CAB",
        origin: [0.29, 32.62],
        destination: [0.33, 32.58]
    }

    axios.default.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default estimateDeliveryFeesAndTime;