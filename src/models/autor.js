const { type } = require("os");
const db = require("../db")

const Schema = db.Schema;

const autorSchema = new Schema ({
    nome: { type: String, required: true},
    endereco: { type: Object, required: true},
    email: { type: /* email*/, required: true}
})