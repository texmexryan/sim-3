require('dotenv').config()
const express = require('express')
const session = require('express-session')
const axios = require('axios')
const massive = require('massive')

const app = express()

//destructure
const {
    SERVER_PORT,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    // ENVIRONMENT,

} = process.env;

// connect to database 
massive(CONNECTION_STRING).then(db => app.set('db', db))

//middleware
// app.use(express.json());   // technically dont need ..express has own bodyparsing?
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// app.use((req, res, next) => {
//     if (ENVIRONMENT === 'dev'){
//         req.app.get('db').set_data().then(userData => {
//             req.session.user = userData[0]
//             next();
//         })
//     }else{
//         next()
//     }
// })

//endpoints

// app.get('/auth/callback', async (req,res) => {
//     //code --> req.query.code
//     let payload = {
//         client_id: REACT_APP_CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         code: req.query.code,
//         grant_type: 'authorization_code',
//         redirect_uri: `http://${req.headers.host}/auth/callback`  // is localhost:3005  just using js to refer to it
//     }
    //post request with code for token
    // let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    // // use token to get user data
    // let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)


//     const db = req.app.get('db')
//     // const {email, name, picture, sub} = userRes.data
//     // above this point is basically Auth0 process

//     let foundUser = await db.find_user([sub])   //db queries return an array of object(s).. array with one object this case
//     if (foundUser[0]){
//         req.session.user = foundUser[0]
//     }else {
//         let createdUser = db.create_user([name, email, picture, sub])
//         // [ {name, email, picture, auth_id....} ]
//         req.session.user = createdUser[0]
//     }

//     // put user data on session
//     // req.session.user = userRes.data
//     res.redirect('/#/private')
// })

app.post('/api//auth/register', (req, res) =>{
    const db = req.app.get('db')
    const {username, password} = req.body
    db.insert_user(username,password)
    .then(user=>res.status(200).send(user))
})

app.post('/api/auth/login', (req,res)=>{
    const db = req.app.get('db')
      let {username, password} = req.body
      db.login_user(username,password)
      .then(user=>res.status(200).send(user))
 })



// app.get('/api/user-data', (req, res) => {
//     console.log(req.session.user)
//     if (req.session.user){
//         res.status(200).send(req.session.user)
//     }else {
//         res.status(401).send('Go log in!')
//     }
// })

// app.get('/logout', (req, res) => {
//     req.session.destroy()
//     res.redirect('http://localhost:3004/')
// })



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
    })