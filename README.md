# Bitstamp API Coding Exercise

A basic application returning data from the Bitstamp API.

This application has been written using JavaScript and JQuery, using Node.js to serve the application.
Node script can be found in index.js in the root directory.
The GET request is made using the JQuery.ajax method and code for this is in public/js/script.js.
Tests have been run using Jasmine and can be found in public/scripts/spec.js. Further information on testing can be found below.

## Local Deployment
To deploy, download the repository and extract all files to directory of your choice.
Ensure [Node.js](https://nodejs.org/en/) is installed.
From the command line in the directory you have extracted files to, use `npm install` to install required dependencies.
Use `npm run start` and the application will be available at http://localhost:3000/.
To run in debug mode, use `npm run debugon` and the app will self-restart whenever changes are made.

## Testing
Jasmine tests can be found in public/js/spec.js and can be run by inserting the following code into the head of the index.html file:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.1.0/jasmine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.1.0/jasmine-html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.1.0/boot.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.1.0/jasmine.css" />
    <script type="text/javascript" src="./js/spec.js"></script>
```


