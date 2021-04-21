
const express = require('express')
const app = express()
const port = 3000

const secure = (req, res, next) => {
    const { token } = req.query;
if (token) {
    next()
} else {
    res.status(403).send('You are not authorized')
}
};

app.use(secure);
 
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/admin', (req, res) => res.send('You have accessed a protected area!'))
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// TASK 
// The aim of this exercise is to create an application middleware that inspects the query in your URL and if there is a token. 

// Steps: 

// Create a index.js with the Express application. 
// Create a function secure() that needs to be on every route (app.use()). 
// Inside this secure function, inspect if there is a query with the name token and a value
// If the token has a value, continue (i.e. send the message ‘Hello World!’).
// If the token hasn’t any value or doesn’t exist, respond with a 403.  
