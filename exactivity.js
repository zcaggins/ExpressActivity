// Initial Setup - Do these everytime
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// CRUD: Create, Read, Update, Destroy
// Request Types: Post, Get, Put, Delete

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/exactivity.html'))
})

app.get("/wordguess", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/hangman.html'))
})

app.get("/highorlow", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/highorlow.html'))
})

app.get("/rps", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/rps.html'))
})

app.listen(3000)
console.log("Express is running!")