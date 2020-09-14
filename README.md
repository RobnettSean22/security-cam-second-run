# Security Cam View

## Description

This project was a just a front-end test sent to by a friend of mine to give me some extra practice. It was a test that he created by him to test potential candidates on their frontend coding skills. The currently [Security Cam View](https://second-cam-run.netlify.app/) is live but it is not the most update version of it. At its roots it is the web application allows the user to view, search, and sort through the "security cameras" in the json file. But I figured not just anyone should be able to view security camera images and information, so I decided to authorization into the mix. I have done this in the past but I recently learned how to do a TOTP with the help of [The RFC Documentation](https://tools.ietf.org/html/rfc6238) and wanted to take it a step further. This being 2authorization if a passwaord is forgotten as 6digit code is sent to the user by email or text to give them an alternate way to login.

## Framework

- React

## Dependences

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**
  - _For hashing password and comparing them_
- **[speakeasy](https://speakeasyjs.github.io/speakeasy/docs/speakeasy/2.0.0/global.html#generateSecret)**
  - _For generating the 6digit token_
- **[nexmo](https://www.vonage.com/communications-apis/)**
  - _For sending the generated token as an SMS_
- **[nodmailer](https://nodemailer.com/about/)**
  - _For sending the generated token as to an email_
- **[styled-components](https://styled-components.com/docs/basics)**
  - _Style without the usage of classes_
- **express**

- **axios**

- **dotenv**

## Components

### **ShowArea**

This component is where the data displays. I received to json file data sets with this test. They were separated but since each file had to interact with one another I combined the two json objects together to make it easier to manipulate the data. The id's matched but the name for the property in the device data set was different so I had to change that first in order to get combine the data in to one json object.

```javascript
let renameProperty = JSON.stringify(status.status).replace(
  /"deviceId":/g,
  '"id":'
);
const cameraStatus = JSON.parse(renameProperty);
const nameOfDevice = devices.devices;

let mergeData = [
  ...[cameraStatus, nameOfDevice]
    .reduce(
      (m, arr) => (
        arr.forEach(
          obj =>
            (m.has(obj.id) && Object.assign(m.get(obj.id), obj)) ||
            m.set(obj.id, obj)
        ),
        m
      ),
      new Map()
    )
    .values()
];
```

### SecurityDisplay

This component holds the mapped data "cards" that are render in the ShowArea grid. I have a few class names in here just for the case on conditional style rendering for the status bars in shown in each card. But you can see the majority of the time I am using style components a majority of the time.

```javascript
<CameraBlocks key={devices.id}>
  <ImgContainer>
    <img src={devices.thumbnail} alt='' />
  </ImgContainer>
  <CameraName className='status-n-name'>
    <div className={devices.active ? "active" : "inactive"}>
      <h3>{devices.active ? "Active" : "Inactive"}</h3>
      <h1>{shortName}</h1>
    </div>
  </CameraName>
</CameraBlocks>
```

### SortButton

The sort button changes the view of the page and separates the data into two grids (Active and Inactive).

### Search

I have done a lot of search filters and this was by far the simplest one because I had a smaller amount of data didn't have to do the map filter map nonsense that I have done many of times before.

```javascript
let sortData = () => {
  mergeData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const sort =
    byStatus === 0 ? mergeData : mergeData.sort((a, b) => b.active - a.active);
  return sort.filter(dVices => {
    return (
      dVices.name.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
      dVices.id.toString().indexOf(value) !== -1
    );
  });
};
const activeData = sortData().filter(online => {
  return online.active === true;
});
const inactiveData = sortData().filter(online => {
  return online.active === false;
});
```

## Server

The sever was never apart or the front-end test as you can imagine, but I wanted to be extra. Currently I have all the end points finished and tested all of the endpoints for the user registration, login, authentication using [Postman](https://www.postman.com/). Since this is a small project I really didn’t want to use a data base and local storage is not really an option so I think I will utilize [seesionStorage](https://javascript.info/localstorage)so it will survive a page reload but when the tab is closed then the information is deleted. That is why there is no end point for deletion.

### Endpoints

- "/reg/"
- "/login/"
- "/verifyEmail/"
- "/altlogin/"
- "/sendEmail/"
- "/sendSMS/"

### Controller

At the moment there is only a control for the user but eventually the data will be placed in here as well there it’s not a necessary but since I made a sever might as well put it in there for good practice.

#### user

All the functionality for user creation, token creation, and authentication is housed in here. There are a couple other features I could add such as mandatory secondary authentication, but I like to keep it as simple as possible for now since I am implementing some new concepts into my arsenal, but I might comeback around to that later. But I'll just ice box it for now. In here you can see the role bcrypt, speakeasy, nodemailer, and nexmo playing.

## Motivation

I wanted to enhance my skills in the realm of secondary authentication, mailing and, SMS notification.
