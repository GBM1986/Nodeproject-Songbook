// searchRouter.js
import express from 'express';
import SearchController from '../controllers/search.controller.js';

const router = express.Router();
const searchController = new SearchController();

// Define the endpoint for searching
router.get('/api/songs/search/:keyword([a-zA-Z0-9]*)', searchController.search);
router.get('/api/songs/search', searchController.search); // For query parameter
router.post('/api/songs/search', searchController.search); // For form data

export { router as SearchRouter };
