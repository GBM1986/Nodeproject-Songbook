import express from 'express';
import SearchController from '../controllers/search.controller.js';

const router = express.Router();
const searchController = new SearchController();


router.get('/songs/search', searchController.search);


export { router as SearchRouter };
