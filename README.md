# YellowBIRD Delivery API Client

Before usage, [sign up](https://logistic.groupngs.com) today to get an API Key (Private Key) which will be used for Authorization.



<h1 id="toc_1">## Usage </h1>

The following examples show how to consume different api actions



<h1 id="toc_1">1. SEND A DELIVERY REQUEST </h1>
****

<h2 id="toc_1">Parameters</h2>
#### Parameters

| Parameter            | Type   | Status   | Description                                                                                                                                                                                                                                                                                                                                                   |
| :------------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| action               | string | REQUIRED | directRequestDelivery                                                                                                                                                                                                                                                                                                                                         |
| privateKey           | string | REQUIRED | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>`Authorization: 'Bearer ' + privateKey `                                                                                                                                                                                                                     |
| countryCode          | string | REQUIRED | Country code Name i.e `UG, KE, TZ` etc                                                                                                                                                                                                                                                                                                                        |
| deliveryOption       | string | REQUIRED | The type of carrier to take the package i.e. `SAME_DATE, NEXT_DATE, STANDARD`                                                                                                                                                                                                                                           |
| vehicleType          | string | REQUIRED | The type of carrier to take the package i.e. `DELIVERY_BIKE, DELIVERY_10_20_TON_TRUCK, DELIVERY_3_TON_TRUCK, DELIVERY_5_10_TON_TRUCK, DELIVERY_BIKE_BOX, DELIVERY_CAB, DELIVERY_PICKUP_TRUCK, DELIVERY_PICKUP_TRUCK_OPENED, DELIVERY_TRUCK`                                                                                                                   |
| deliveryInstructions | string | OPTIONAL | Instructions of the delivery request, i.e Clear description of the intended delivery destination                                                                                                                                                                                                                                                              |
| packageDetails       | object | REQUIRED | Details of the sender i.e.<br/> `{packageDetails :{packageWeightKg : double (REQUIRED), packageHeightCm : double (OPTIONAL), packageWidthCm : double (OPTIONAL), , packageLenghtCm : double (OPTIONAL), packageTotalCost : double (REQUIRED), itemLabel : String (REQUIRED), itemDescription : (REQUIRED), itemColor : String (OPTIONAL), itemImageUrl : String (REQUIRED), itemQuantity : int (REQUIRED)}}` |                                                                                                                                                                                                                                                                                                                        |
| packagesMultiple     | array  | OPTIONAL | This is used when the dispatch contains multiple items of different natures<br/> `Array of multiple packageDetails [{...},{...}]`                                                                                                                                                                                                                             |
| pickupContactInfo    | object | REQUIRED | Details of the sender i.e.<br/> `{fullName: String (REQUIRED), phoneNumber: String (REQUIRED), email: String (OPTIONAL), gender: String (OPTIONAL), description: String (OPTIONAL), addressLatLng: Array (REQUIRED) i.e. [lat, long], addressLabel: String (REQUIRED), city: String (OPTIONAL), building: String (OPTIONAL), plotNumber: String (OPTIONAL)}`  |
| dropOffContactInfo   | object | REQUIRED | Details of the receiver i.e.<br/>`{fullName: String (REQUIRED), phoneNumber: String (REQUIRED), email: String (OPTIONAL), gender: String (OPTIONAL), description: String (OPTIONAL), addressLatLng: Array (REQUIRED) i.e. [lat, long], addressLabel: String (REQUIRED), city: String (OPTIONAL), building: String (OPTIONAL), plotNumber: String (OPTIONAL)}` |
| paymentMode          | string | REQUIRED | Mode of payment , see Payment Modes for details|
| orderId          | string | OPTIONAL | Id of the order from the market place <br/>    |
| pickupConfirmationOTP          | string | OPTIONAL | In case the partner wants the rider to confirm if the shop or merchant is the correct one <br/>    |
| dropOffConfirmationOTP          | string | OPTIONAL | In case the partner wants the rider to confirm if the customer is the correct one before handeling the item<br/>    |
| pickupCheckList      | array  | OPTIONAL | This are the list of check the dirver needs to perform on the item <br/> `[Item1, Item2]`|     

#### Payement Modes

| Mode                        | Description                 |
| :-------------------------- | :-------------------------- |
| CASH                        | CASH                        |
| MOBILE_MONEY                | MOBILE MONEY                |
| BANK_TRANSFER               | BANK TRANSFER               |
| CREDIT_CARD                 | CREDIT CARD                 |
| CASH_BY_SENDER              | CASH BY SENDER              |
| CASH_BY_RECIPIENT           | CASH BY RECEIVER            |
| CASH_ON_DELIVERY            | CASH ON DELIVERY            |
| YELLOW_PAY                  | YELLOW PAY                  |
| MOBILE_WALLET               | MOBILE WALLET               |
| BUSINESS_ACCOUNT            | BUSINESS ACCOUNT            |
| AUTO_RECOVERY               | AUTO RECOVERY               |
| POSTPAID_E_COMMERCE_PARTNER | POSTPAID E COMMERCE PARTNER |
| PREPAID_E_COMMERCE_PARTNER  | PREPAID E COMMERCE PARTNER  |



<h2 id="toc_1">1.1 Delivery Request (Distance-based pricing)</h2>

###POST :

```javascript
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "directRequestDelivery",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_MOTORBIKE",
    "paymentMode": "CASH_BY_RECEIVER",
    "pickupContactInfo": {
        "fullName": "Wafula Abdalah",
        "phoneNumber": "77900000",
        "countryCode": "256",
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
        "fullName": "Customer name",
        "phoneNumber": "77900000",
        "countryCode": "256",
        "email": "",
        "gender": "",
        "description": "String (OPTIONAL)",
        "addressLatLng": "[0.33, 32.58]",
        "addressLabel": "Unknown",
        "city": "Kampala",
        "building": "String (OPTIONAL)",
        "plotNumber": "String (OPTIONAL)"
    },
    "packageDetails" :{
        "packageWeightKg" : 9.4,
        "packageHeightCm" : 15,
        "packageWidthCm" : 25,
        "packageTotalCost" : 39000,
        "itemLabel" : "Dell Laptop Charger",
        "itemDescription" : "Dell Laptop Charger, Black in color",
        "itemColor" : "RED",
        "itemImageUrl" : "https://snpi.dell.com/snp/images/products/large/en-us~332-1827_v1/332-1827_v1.jpg",
        "itemQuantity" : 4
    },
    "pickupCheckList" : ["Test charge on a similar laptop","The item is new"],
    "specialInstruction" : "No pickup instruction",
    "pickupConfirmationOTP" : 1234,
    "dropOffConfirmationOTP" : 1234
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```

#### Sample Response (

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


<h2 id="toc_1">1.2 Delivery Request (Zone-based pricing)</h2>

```javascript
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "directRequestDeliveryZone",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_MOTORBIKE",
    "origin": "[0.31876900792121887, 32.59235382080078]",
    "destination": "[0.3047135992937171, 32.483221853186556]",
    "deliveryOption" : "SAME_DAY",
    "pickupContactInfo": {
        "fullName": "Carrefour SuperMarket", 
        "phoneNumber": "707716XXX",
        "countryCode": "256",
        "email": "contact@Carrefouruganda.com", 
        "gender": "", 
        "description": "Oasis Mall,Yusuf Lule Road", 
        "addressLatLng": "[0.3469927,32.6138412]", 
        "addressLabel": "Carrefour SuperMarket", 
        "city": "Kampala", 
        "building": "Oasis Mall", 
        "plotNumber": "plot 111"
    },
    "dropOffContactInfo": {
        "fullName": "G.Nono", 
        "phoneNumber": "787716XXX", 
        "countryCode": "256",
        "email": "", 
        "gender": "", 
        "description": "Plot 159, Mutesa 2 Road, MidleView Appartments", 
        "addressLatLng": "[0.3205655,32.5861178]", 
        "addressLabel": "Mutesa2 Road, MidleView Appartments", 
        "city": "Kampala", 
        "building": "MidleView", 
        "plotNumber": "plot 159"
    },
    "packageDetails" :{
        "packageWeightKg" : 1.2,
        "packageHeightCm" : 6.7,
        "packageWidthCm" : 6.1,
        "packageLenghtCm" : 14.1,
        "packageTotalCost" : 5356000,
        "itemLabel" : "iPhone 14 Pro Max",
        "itemDescription" : "iPhone 14 Pro The ultimate iPhone. 6.7″ or 6.1″ Super Retina XDR display footnote¹ ProMotion technology Always-On display",
        "itemColor" : "Grey",
        "itemImageUrl" : "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Silver24.jpg",
        "itemQuantity" : 2
    },
    "packagesMultiple" : [{
        "packageWeightKg" : 4.6,
        "packageHeightCm" : 15,
        "packageWidthCm" : 25,
        "packageLenghtCm" : 24.1,
        "packageTotalCost" : 2339000,
        "itemLabel" : "Dell Laptop (Latitude 3410) ",
        "itemDescription" : "Dell Latitude 3410 (i5-1TB HHD) 10th Gen",
        "itemColor" : "BLACK",
        "itemImageUrl" : "https://www.laptop.lk/wp-content/uploads/2021/08/dell-7.jpg",
        "itemQuantity" : 1
    },{
        "packageWeightKg" : 1.4,
        "packageHeightCm" : 10,
        "packageWidthCm" : 5,
        "packageLenghtCm" : 9.1,
        "packageTotalCost" : 57000,
        "itemLabel" : "Charger for Dell Laptop",
        "itemDescription" : "Dell Laptop Charger, Black in color",
        "itemColor" : "BLACK",
        "itemImageUrl" : "https://snpi.dell.com/snp/images/products/large/en-us~332-1827_v1/332-1827_v1.jpg",
        "itemQuantity" : 2
    }],
    "pickupCheckList" : ["Test charge on a similar laptop","The item is new"],
    "specialInstruction" : "No pickup instruction",
    "orderId" : "MM0234A",
    "status" : "DRAFT",
    "pickupConfirmationOTP" : 1234,
    "dropOffConfirmationOTP" : 1234
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```

#### Sample Response (Zone based)

```json
{
    "estimatedDistance": 5.9624095721309605,
    "estimatedDuration": 37.50125827085583,
    "estimatedFee": 10200,
    "requestID": "04+QG7QhgE9HSq1+f2/zQNX3qWr3ZVebXkLNglJl1AM=",
    "orderId": "MM0234A",
    "currency": "UGX",
    "countryCode": "UG",
    "zoneLabel": "ZONE1",
    "deliveryOption": "SAME_DAY",
    "totalWeighInKg": 9.799999999999999,
    "volumetricWeight": 2.7750084999999998,
    "message": "Ok"
}
```


<h1 id="toc_1">2. PRICE ESTIMATION </h1>
****


#### Parameters

| Parameter   | Type   | Status   | Description                                                                                                                                                                                                                                 |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| action      | string | REQUIRED | directRequestDelivery                                                                                                                                                                                                                       |
| privateKey  | string | REQUIRED | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>`Authorization: 'Bearer ' + privateKey `                                                                                                   |
| countryCode | string | REQUIRED | Country code Name i.e `UG, KE, TZ` etc                                                                                                                                                                                                      |
| deliveryOption       | string | REQUIRED | The type of carrier to take the package i.e. `SAME_DATE, NEXT_DATE, STANDARD`                                                                                                                                                                                                                                           |
| origin      | array  | REQUIRED | Latitude and Longitude i.e. `[lat, lng]`                                                                                                                                                                                                    |
| destination | array  | REQUIRED | Latitude and Longitude i.e. `[lat, lng]`                                                                                                                                                                                                    |
<h2 id="toc_1">2.1 ### Price Estimation (Distance-based pricing) </h2>



```javascript
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "estimateDeliveryFees",
    "countryCode": "UG",
    "origin": "[0.31876900792121887, 32.59235382080078]",
    "destination": "[0.3047135992937171, 32.483221853186556]"
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```

#### Sample Response

```json
{
    "estimatedDistance": 17.12896289593121,
    "estimatedDuration": 53.63072418301175,
    "currency": "UGX",
    "countryCode": "UG",
    "estimatedFee": 10200,
    "message": "OK"
}
```

                                                     |
<h2 id="toc_1">2.2 ### Price Estimation (Zone-pricing pricing) </h2>


```javascript
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "estimateDeliveryFeesZone",
    "countryCode": "UG",
    "origin": "[0.31876900792121887, 32.59235382080078]",
    "destination": "[0.3047135992937171, 32.483221853186556]",
    "deliveryOption" : "SAME_DAY",
    "packageDetails" :{
        "packageWeightKg" : 1.2,
        "packageHeightCm" : 13.7,
        "packageWidthCm" : 17.1,
        "packageLenghtCm" : 27.1,
        "packageTotalCost" : 6356000,
        "itemQuantity" : 2
    },
    "packagesMultiple" : [{
        "packageWeightKg" : 1.6,
        "packageHeightCm" : 9,
        "packageWidthCm" : 11,
        "packageLenghtCm" : 25,
        "packageTotalCost" : 2339000,
        "itemQuantity" : 1
    },{
        "packageWeightKg" : 0.4,
        "packageHeightCm" : 10,
        "packageWidthCm" : 5,
        "packageLenghtCm" : 15,
        "packageTotalCost" : 57000,
        "itemQuantity" : 2
    }]
}
axios.post('https://logistic.groupngs.com/api/', data, config)
.then(...)
.catch(...)
```

#### Sample Response

```json
{
    "estimatedDistance": 17.12896289593121,
    "estimatedDuration": 53.63072418301175,
    "currency": "UGX",
    "countryCode": "UG",
    "zoneLabel": "ZONE2",
    "deliveryOption": "SAME_DAY",
    "totalWeighInKg": 4.800000000000001,
    "volumetricWeight": 4.168108500000001,
    "estimatedFee": 10200,
    "message": "OK"
}
```

### Nearest Driver Distance

#### Parameters

| Parameter   | Type   | Status   | Description                                                                                                                                                                                                                                 |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| action      | string | REQUIRED | directRequestDelivery                                                                                                                                                                                                                       |
| privateKey  | string | REQUIRED | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>`Authorization: 'Bearer ' + privateKey `                                                                                                   |
| countryCode | string | REQUIRED | Country code Name i.e `UG, KE, TZ` etc                                                                                                                                                                                                      |
| vehicleType | string | REQUIRED | The type of carrier to take the package i.e. `DELIVERY_MOTORBIKE, DELIVERY_10_20_TON_TRUCK, DELIVERY_3_TON_TRUCK, DELIVERY_5_10_TON_TRUCK, DELIVERY_BIKE_BOX, DELIVERY_CAB, DELIVERY_PICKUP_TRUCK, DELIVERY_PICKUP_TRUCK_OPENED, DELIVERY_TRUCK` |
| position    | array  | REQUIRED | Latitude and Longitude i.e. `[lat, lng]`                                                                                                                                                                                                    |

```js
let config = {
    headers: {
        Authorization: 'Bearer ' + privateKey
    }
}

let data = {
    "action": "nearestDriverDistance",
    "countryCode": "UG",
    "vehicleType": "DELIVERY_MOTORBIKE",
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

| Parameter  | Type   | Status   | Description                                                                                                                               |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| action     | string | REQUIRED | directRequestDelivery                                                                                                                     |
| privateKey | string | REQUIRED | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>`Authorization: 'Bearer ' + privateKey ` |
| requestID  | string | REQUIRED | Id of the request                                                                                                                         |

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

| Status                       | Description                   |
| :--------------------------- | :---------------------------- |
| DRAFT                        | DRAFT                         |
| WAITING_FOR_DRIVER_TO_ACCEPT | WAITING FOR DRIVER TO ACCEPT  |
| ACCEPTED                     | REQUEST ACCEPTED              |
| REJECTED                     | REQUEST REJECTED              |
| EXPIRED                      | REQUEST EXPIRED               |
| STARTED                      | REQUEST STARTED               |
| COMPLETED                    | REQUEST COMPLETED             |
| DRIVER_ENDING_TRIP           | DRIVER ENDING TRIP            |
| SEARCHING_DRIVER             | SEARCHING DRIVER              |
| DRIVER_ARRIVING              | DRIVER ARRIVING               |
| DRIVER_ARRIVED               | DRIVER ARRIVED                |
| PAYMENT_CONFIRMATION         | PAYMENT RECEIVED FROM CLIENT  |
| NO_DRIVER_FOUND              | NO DRIVER FOUND AT THE MOMENT |

##### Specific to deliveries

| Status                        | Description                            |
| :---------------------------- | :------------------------------------- |
| DRIVER_ON_THE_WAY_TO_PICKUP   | DRIVER ON THE WAY TO PICKUP POINT      |
| DRIVER_ARRIVED_AT_PICKUP      | DRIVER ARRIVED AT PICKUP POINT         |
| DRIVER_ON_THE_WAY_TO_DROP_OFF | DRIVER ON THE WAY TO DROP OFF LOCATION |
| DRIVER_ARRIVED_AT_DROP_OFF    | DRIVER ARRIVED AT DROP OFF LOCATION    |
| ORDER_DELIVERED               | ORDER DELIVERED TO CUSTOMERS           |

##### Cancellations

| Status                           | Description                      |
| :------------------------------- | :------------------------------- |
| USER_CANCELED_ACCEPTED_REQUEST   | USER CANCELED ACCEPTED REQUEST   |
| DRIVER_CANCELED_ACCEPTED_REQUEST | DRIVER CANCELED ACCEPTED REQUEST |
| REQUEST_EVENT_CANCELED           | REQUEST EVENT CANCELED           |
| USER_CANCELED_STARTED_TRIP       | USER CANCELED STARTED TRIP       |
| DRIVER_CANCELED_STARTED_TRIP     | DRIVER CANCELED STARTED TRIP     |
| REQUEST_DELETED_BY_DRIVER        | REQUEST DELETED BY DRIVER        |

##### Others

| Status                    | Description               |
| :------------------------ | :------------------------ |
| CLIENT_PICKUP_CONFIRMED   | CLIENT PICKUP CONFIRMED   |
| CLIENT_DROP_OFF_CONFIRMED | CLIENT DROP OFF CONFIRMED |
| RATING_DONE               | RATING DONE               |
| RATING_DONE_CLIENT        | RATING DONE CLIENT        |
| RATING_DONE_FREELANCER    | RATING DONE FREELANCER    |

### Current Driver Location

#### Parameters

| Parameter  | Type   | Status   | Description                                                                                                                               |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| action     | string | REQUIRED | directRequestDelivery                                                                                                                     |
| privateKey | string | REQUIRED | Basic authentication Key obtained from the dashboard credentials inserted in the Header i.e.<br/>`Authorization: 'Bearer ' + privateKey ` |
| requestID  | string | REQUIRED | Id of the request                                                                                                                         |

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
  "status": "200"
}
```
