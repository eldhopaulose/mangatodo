const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth')
var cors = require('cors')
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
const  dbURI = 'mongodb+srv://eldhopaulose0485:aleenaeldho_025@cluster0.4sjqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())
app.use('/api/auth', authRoute)


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

// app.listen(2400, () => {console.log("Server started: 2400")})
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3001;
}
app.listen(port, () => {
    console.log("Server has started succes fully.");
});





