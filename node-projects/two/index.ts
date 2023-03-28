// express is a constructor function
import express from 'express';
import { usersDB } from './data';

// app is the express application
// the app const is the central object of the
// entire project
const app = express();

// use the callback whenever there is a request
// req => Request object => passed by express => contains the details of the http request
// res => Response object => passed by express => contains helper methods to send a response
// the callback is a MIDDLEWARE function
// middlewares are functions that have access to the req, res and next objects
app.use((req, res) => {
    console.log("here");
    res.send(usersDB);
});

// opens port 3000 on the computer
// and can now accept requests through http
app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
);
// creates a baseurl of
// http://localhost:3000