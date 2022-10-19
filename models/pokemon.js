const mongoose = require('mongoose')

//Make A Schema
const pokeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    hasBeenCaught: Boolean
})


// Make A Model From The Schema

const Pokemon = mongoose.model('Pokemon', pokeSchema)
//Export The Model For Use In The App

module.exports = Pokemon