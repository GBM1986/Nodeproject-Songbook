import express from 'express';

const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log('Express server kører http://localhost');
});

app.get('/',(req,res) => {
    res.send('hej verden!');
})

app.get('/about', (req,res) => {
    res.send('Dette er about siden')
})

app.get('/contact', (req,res) => {
    res.send('dette er kontakt siden')
})

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})




