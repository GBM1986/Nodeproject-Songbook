import express from 'express';
import ArtistController from '../controllers/artist.controller.js';

const router = express.Router();
const artistController = new ArtistController();

router.get('/artists', (req,res) => {
    artistController.list(req,res);
});

router.get('/artist/:id([0-9]*)', (req,res) => {
    artistController.details(req,res);
});

export { router as ArtistRouter }