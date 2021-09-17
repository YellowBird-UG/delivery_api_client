const axios = require('axios').default;

const requestDelivery = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data = {
        action: "directRequestDelivery",
        countryCode: "UG",
        vehicleType: "DELIVERY_CAB",
        paymentMode: 'CASH',
        pickupContactInfo: {
            fullName: "Wafula Abdalah",
            phoneNumber: "77900000",
            countryCode: "+256",
            email: "email@example.com",
            gender: "",
            description: "String (OPTIONAL)",
            addressLatLng: [0.29, 32.62],
            addressLabel: "Acacia Mall",
            city: "Kampala",
            building: "String (OPTIONAL)",
            plotNumber: "String (OPTIONAL)"
        },
        dropOffContactInfo: {
            fullName: "Nono",
            phoneNumber: "77900000",
            countryCode: "+256",
            email: "",
            gender: "",
            description: "String (OPTIONAL)",
            addressLatLng: [0.33, 32.58],
            addressLabel: "Unknown",
            city: "Kampala",
            building: "String (OPTIONAL)",
            plotNumber: "String (OPTIONAL)"
        }
    }

    axios.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default requestDelivery;