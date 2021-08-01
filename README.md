## Start Project

Simply install dependencies and start project

```
npm install
npm start

```

## Project Structure

```
├── src
│   ├── components    // global components that can be reused 
│   ├── pages         // project pages
│   ├── stores        // mobx stores 
│   ├── styles        // default style variables for index.scss
│   ├── config        // config styles received from dotenv
|── router            // routing all pages
```

## Project Features
```
├── Login 
│   ├── LocalStorage  // Store user token  
│   ├── Login Api     // Use authStore to callApi
│   ├── CustomForm    // Use antd & rsuite Library & verify form input
│   ├── FormResponse  // Success and error message handling
|── Home              
│   ├── Favicon       // For brand icon
│   ├── Avatar        // Show user name after login 
│   ├── Dropdown      // Login out button dropdown
│   ├── ButtonScroll  // Smooth transition from button scroll to component
│   ├── CustomPlan    // Use type to diffienicate selected insurance plan  
│   ├── SwitchButton  // Customized button to control component
│   ├── FormSubmit    // Verify forms input - check dataList selected from user & user token from localStorage 
│   ├── FormResponse  // Success and error message handling
```
## Login username & password

username: admin
password: MCC001!

You can use this for login the page

## Port 

listen to Port 3000 by default - localhost:3000

```

