import express from 'express'
import SongController from '../controllers/song.controller.js';

const router = express.Router();

const controller = new SongController()

// List alle sange
router.get('/songs', (req,res) => {
    controller.list(req,res)
})

// Hent sang detaljer
router.get('/songs/:id([0-9]*)', (req,res) => {
    controller.details(req,res)
})

router.post('/songs', (req,res) => {
    controller.create('Posting new song')
})

export { router as SongRouter}