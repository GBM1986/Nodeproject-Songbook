import express from 'express'
import db from './config/db.config.js'
import dotenv from 'dotenv'

dotenv.config();

// const express = require('express');
const app = express();


const port = process.env.PORT;
const api_key =process.env.APIKEY;



app.get('/',(req,res) => {
    res.send('hej verden!');
})

app.get('/songs', (req,res) => {
    db.query(`SELECT s.id, s.title, a.name
                FROM song s
                JOIN artist a
                ON s.artist_id = a.id`, (error,result) => {
                    if(error) {
                        console.error(error)
                    } else {
                        res.json(result);
                    }   
                })
})

app.get('/songs/:id([0-9]*)', (req,res) => {
    const { id } = req.params;
    const sql =`
        SELECT s.id, s.title, s.content, s.artist_id, a.name AS artist_name
        FROM song s
        JOIN artist a
        ON s.artist_id = a.id
        WHERE s.id = ${id}`
    db.query(sql, (error, result) => {
        if(error) {
            console.error(error);
        } else {
        res.json(result)
        }   
    })
})

app.post('/songs', (req,res) => {
    res.send('Sange - Opret ny sang')
})

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})

app.listen(process.env.PORT, () => {
    console.log(`Express server kører http://localhost:${process.env.PORT}`);
});


