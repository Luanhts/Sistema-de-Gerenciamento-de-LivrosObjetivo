const { connect } = require("http2");
const mongoose = require("mongoose");

const db = "mongodb+srv://luanh:<db_password>@cluster0.jeivl.mongodb.net/Biblioteca"

async function connect() {
    await mongoose.connect(db);
}

connect()

.then(() => console.log("Conectado!!!"))

.catch((err) => console.log(err))

module.exports = mongoose