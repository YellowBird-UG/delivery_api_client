# YellowBIRD Delivery API Client
Before usage, [sign up](https://logistic.groupngs.com) today to get an API Key (Private Key) which will be used for Authorization.

## Usage
The following examples show how to consume different api actions
### Delivery Request
#### Parameters
| Parameter | Type        | Status      |   Description |
|   :---    | :---        | :---        |   :---        |
| action    | string      | REQUIRED    | directRequestDelivery |
| privateKey | string     | REQUIRED    | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>```Authorization: 'Bearer ' + privateKey ``` |
| countryCode | string     | REQUIRED    | Country code Name i.e ```UG, KE, TZ``` etc |
| vehicleType | string     | REQUIRED    | The type of carrier to take the package i.e. ```DELIVERY_BIKE, DELIVERY_10_20_TON_TRUCK, DELIVERY_3_TON_TRUCK, DELIVERY_5_10_TON_TRUCK, DELIVERY_BIKE_BOX, DELIVERY_CAB, DELIVERY_PICKUP_TRUCK, DELIVERY_PICKUP_TRUCK_OPENED, DELIVERY_TRUCK``` |
| deliveryInstructions | string | OPTIONAL | Instructions of the delivery request, i.e Clear description of the intended delivery destination |
| packageWeight | double | OPTIONAL | Weight of the Package in Kilograms(kg) |
| packageDescription | string | OPTIONAL | Description of the package |
| pickUpContactInfo | object | REQUIRED | Details of the sender i.e.<br/> ```{fullName: String (REQUIRED), phoneNumber: String (REQUIRED), email: String (OPTIONAL), gender: String (OPTIONAL), description: String (OPTIONAL), addressLatLng: Array (REQUIRED) i.e. [lat, long], addressLabel: String (REQUIRED), city: String (OPTIONAL), building: String (OPTIONAL), plotNumber: String (OPTIONAL)}``` |
| dropOffContactInfo | object | REQUIRED | Details of the receiver i.e.<br/>```{fullName: String (REQUIRED), phoneNumber: String (REQUIRED), email: String (OPTIONAL), gender: String (OPTIONAL), description: String (OPTIONAL), addressLatLng: Array (REQUIRED) i.e. [lat, long], addressLabel: String (REQUIRED), city: String (OPTIONAL), building: String (OPTIONAL), plotNumber: String (OPTIONAL)}``` |


```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "directRequestDelivery",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_CAB",
    "pickUpContactInfo": {
        "fullName": "Wafula Abdalah", 
        "phoneNumber": "77900000", 
        "countryCode": "+256",
        "email": "abdalah.wafula@yellowbird.mobi", 
        "gender": "", 
        "description": "String (OPTIONAL)", 
        "addressLatLng": "[0.29, 32.62]", 
        "addressLabel": "Acacia Mall", 
        "city": "Kampala", 
        "building": "String (OPTIONAL)", 
        "plotNumber": "String (OPTIONAL)"
    },
    "dropOffContactInfo": {
        "fullName": "Nono", 
        "phoneNumber": "77900000", 
        "countryCode": "+256",
        "email": "", 
        "gender": "", 
        "description": "String (OPTIONAL)", 
        "addressLatLng": "[0.33, 32.58]", 
        "addressLabel": "Unknown", 
        "city": "Kampala", 
        "building": "String (OPTIONAL)", 
        "plotNumber": "String (OPTIONAL)"
    }
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```
#### Sample Response
```json
{
    "estimatedDistance": 6.290088835583491,
    "estimatedDuration": 29.21120981731499,
    "estimatedFee": 8155.734773947344,
    "requestID": "38fa6ce0525cb...3be0183cc2f5ca73",
    "currency": "UGX",
    "message": "Delivery request sent"
}
```
### Price Estimation
#### Parameters
| Parameter | Type        | Status      |   Description |
|   :---    | :---        | :---        |   :---        |
| action    | string      | REQUIRED    | directRequestDelivery |
| privateKey | string     | REQUIRED    | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>```Authorization: 'Bearer ' + privateKey ``` |
| countryCode | string     | REQUIRED    | Country code Name i.e ```UG, KE, TZ``` etc |
| vehicleType | string     | REQUIRED    | The type of carrier to take the package i.e. ```DELIVERY_BIKE, DELIVERY_10_20_TON_TRUCK, DELIVERY_3_TON_TRUCK, DELIVERY_5_10_TON_TRUCK, DELIVERY_BIKE_BOX, DELIVERY_CAB, DELIVERY_PICKUP_TRUCK, DELIVERY_PICKUP_TRUCK_OPENED, DELIVERY_TRUCK``` |
| origin | array | REQUIRED | Latitude and Longitude i.e. ```[lat, lng]``` |
| destination | array | REQUIRED | Latitude and Longitude i.e. ```[lat, lng]``` |
```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "estimateDeliveryFeesAndTime",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_CAB",
    "origin": "[0.29, 32.62]",
    "destination": "[0.33, 32.58]"
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```
#### Sample Response
```json
{
    "estimatedDistance": 6.290088835583491,
    "estimatedDuration": 29.21120981731499,
    "currency": "UGX",
    "estimatedFee": 8155.734773947344,
    "message": "OK"
}
```
### Nearest Driver Distance
#### Parameters
| Parameter | Type        | Status      |   Description |
|   :---    | :---        | :---        |   :---        |
| action    | string      | REQUIRED    | directRequestDelivery |
| privateKey | string     | REQUIRED    | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>```Authorization: 'Bearer ' + privateKey ``` |
| countryCode | string     | REQUIRED    | Country code Name i.e ```UG, KE, TZ``` etc |
| vehicleType | string     | REQUIRED    | The type of carrier to take the package i.e. ```DELIVERY_BIKE, DELIVERY_10_20_TON_TRUCK, DELIVERY_3_TON_TRUCK, DELIVERY_5_10_TON_TRUCK, DELIVERY_BIKE_BOX, DELIVERY_CAB, DELIVERY_PICKUP_TRUCK, DELIVERY_PICKUP_TRUCK_OPENED, DELIVERY_TRUCK``` |
| position | array | REQUIRED | Latitude and Longitude i.e. ```[lat, lng]``` |
```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "nearestDriverDistance",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_CAB",
    "position": "[0.315133, 32.576353]"
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```
#### Sample Response
```json
{
    "distance": 456
}
```
### Current Request Status 
#### Parameters
| Parameter | Type        | Status      |   Description |
|   :---    | :---        | :---        |   :---        |
| action    | string      | REQUIRED    | directRequestDelivery |
| privateKey | string     | REQUIRED    | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>```Authorization: 'Bearer ' + privateKey ``` |
| requestID | string     | REQUIRED    | Id of the request |

```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "requestStatus",
    "requestID": "7638bae085e...1f24cf80edff1213"
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```
#### Sample Response
```json
{
    "requestID": "38fa6ce0525cb7db8...0183cc2f5ca73",
    "status": "PENDING"
}
```

#### Sample Request Statuses
##### Common
| Status | Description |
| :---   | :---        |
| DRAFT | DRAFT |
| WAITING_FOR_DRIVER_TO_ACCEPT | WAITING_FOR_DRIVER_TO_ACCEPT |
| ACCEPTED | REQUEST ACCEPTED |
| REJECTED | REQUEST REJECTED |
| EXPIRED | REQUEST EXPIRED |
| STARTED | REQUEST STARTED |
| COMPLETED | REQUEST COMPLETED |
| DRIVER_ENDING_TRIP | DRIVER ENDING TRIP |
| SEARCHING_DRIVER | SEARCHING DRIVER |
| DRIVER_ARRIVING | DRIVER ARRIVING |
| DRIVER_ARRIVED | DRIVER ARRIVED |
| PAYMENT_CONFIRMATION | PAYMENT RECEIVED FROM CLIENT |
| NO_DRIVER_FOUND | NO DRIVER FOUND AT THE MOMENT |


##### Specific to deliveries
| Status | Description |
| :---   | :---        |
| DRIVER_ON_THE_WAY_TO_PICKUP | DRIVER ON THE WAY TO PICKUP POINT |
| DRIVER_ARRIVED_AT_PICKUP | DRIVER ARRIVED AT PICKUP POINT|
| DRIVER_ON_THE_WAY_TO_DROP_OFF | DRIVER ON THE WAY TO DROP OFF LOCATION |
| DRIVER_ARRIVED_AT_DROP_OFF | DRIVER ARRIVED AT DROP OFF LOCATION |
| ORDER_DELIVERED | ORDER DELIVERED TO CUSTOMERS |

##### Cancellations
| Status | Description |
| :---   | :---        |
| USER_CANCELED_ACCEPTED_REQUEST | USER CANCELED ACCEPTED REQUEST |
| DRIVER_CANCELED_ACCEPTED_REQUEST | DRIVER CANCELED ACCEPTED REQUEST |
| REQUEST_EVENT_CANCELED | REQUEST EVENT CANCELED |
| USER_CANCELED_STARTED_TRIP | USER CANCELED STARTED TRIP |
| DRIVER_CANCELED_STARTED_TRIP | DRIVER CANCELED STARTED TRIP |
| REQUEST_DELETED_BY_DRIVER | REQUEST DELETED BY DRIVER |

##### Others
| Status | Description |
| :---   | :---        |
| CLIENT_PICKUP_CONFIRMED | CLIENT PICKUP CONFIRMED |
| CLIENT_DROP_OFF_CONFIRMED | CLIENT DROP OFF CONFIRMED |
| RATING_DONE | RATING DONE |
| RATING_DONE_CLIENT | RATING DONE CLIENT |
| RATING_DONE_FREELANCER | RATING DONE FREELANCER |


### Current Driver Location
#### Parameters
| Parameter | Type        | Status      |   Description |
|   :---    | :---        | :---        |   :---        |
| action    | string      | REQUIRED    | directRequestDelivery |
| privateKey | string     | REQUIRED    | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>```Authorization: 'Bearer ' + privateKey ``` |
| requestID | string     | REQUIRED    | Id of the request |

```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "driverLocation",
    "requestID": "7638bae085e...1f24cf80edff1213"
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```
#### Sample Response
```json
{
      "position": "[0.3501982, 32.6146048]",
      "name": "Owen",
      "phone": "+2567077...00",
      "drivingStatus": "ONLINE",
      "serialNumber": "B..7",
      "profilePictureUrl": "https://firebasestorage.googleapis.com/v0/b/....e-f04f17fda7cd.jpeg",
      "message": "OK",
      "status": "200",
}
```
