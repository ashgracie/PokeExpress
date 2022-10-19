require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Pokemon = require('./models/pokemon')
// this makes 2 const fruits & veggies 

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))

/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET
app.get('/pokemon', (req, res) => {
  Pokemon.find({}, (err, foundPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('pokemon/Index', {
        pokemon: foundPokemon
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/pokemon/new', (req, res) => {
  res.render('pokemon/New')
})
// DELETE //https://www.denofgeek.com/wp-content/uploads/2021/04/Pikachu.png?fit=1920%2C1080
app.delete('/pokemon/:id', (req, res) => {
  Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/pokemon')
    }
  })
})

// UPDATE
app.put('/pokemon/:id', (req, res) => {
  req.body.hasBeenCaught === 'on' || req.body.hasBeenCaught === true ? req.body.hasBeenCaught = true : req.body.hasBeenCaught = false
  Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/pokemon/${updatedPokemon._id}`)
    }
  })
})

// CREATE
app.post('/pokemon', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  req.body.hasBeenCaught === 'on' ? req.body.hasBeenCaught = true : req.body.hasBeenCaught = false
  Pokemon.create(req.body, (err, createdPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/pokemon/${createdPokemon._id}`)
      //res.send(createdPokemon)
    }
  })
})

// EDIT (not applicable in an api)
app.get('/pokemon/:id/edit', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('pokemon/Edit', {
       pokemon: foundPokemon
     })
    }
  })
 })

// SHOW ---- READ ---- GET
app.get('/pokemon/:id', (req, res) => {
 Pokemon.findById(req.params.id, (err, foundPokemon) => {
   if(err){
    console.error(err)
    res.status(400).send(err)
   } else {
    res.render('pokemon/Show', {
      pokemon: foundPokemon
    })
   }
 })
})



/* END ROUTES */


// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})