const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth')

const  dbURI = 'mongodb+srv://eldhopaulose0485:aleenaeldho_025@cluster0.4sjqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())
app.use('/api/auth', authRoute)


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})


app.listen(3000, function() {
    console.log("server running port 3000");
});






