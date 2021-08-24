import * as axios from 'axios'

interface DeliveryBody {
    action: string,
    countryCode: string,
    vehicleType: string,
    pickUpContactInfo: Contact,
    dropOffContactInfo: Contact,
    packageDescription?: string,
    packageWeight?: number,
    deliveryInstructions?: string,
}

interface Contact {
    fullName: string,
    phoneNumber: string,
    countryCode: string,
    email: string,
    gender?: string,
    description?: string,
    addressLatLng: Array<number>,
    addressLabel: string,
    city?: string,
    building?: string,
    plotNumber?: string
}

const requestDelivery = () => {
    let privateKey = '';
    let config = {
        headers: {
            Authorization: 'Bearer ' + privateKey
        }
    }

    let data: DeliveryBody = {
        action: "directRequestDelivery",
        countryCode: "UG",
        vehicleType: "DELIVERY_CAB",
        pickUpContactInfo: {
            fullName: "Wafula Abdalah",
            phoneNumber: "77900000",
            countryCode: "+256",
            email: "email@example.com",
            gender: "",
            addressLatLng: [0.29, 32.62],
            addressLabel: "Acacia Mall",
            city: "Kampala",
        },
        dropOffContactInfo: {
            fullName: "Nono",
            phoneNumber: "77900000",
            countryCode: "+256",
            email: "",
            addressLatLng: [0.33, 32.58],
            addressLabel: "Unknown",
        }
    }

    axios.default.post('https://logistic.groupngs.com/api/', data, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error)
        })
}

export default requestDelivery;