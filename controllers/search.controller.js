import SongModel from '../model/SongModel.js'

class SearchController {
    constructor() {
        console.log('Class SearchController instantiated')
    }

    search = async (req, res) => {
        try {
          const keyword = req.params.keyword || req.query.keyword || req.body.keyword;
    
          // Validate if keyword is provided
          if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required for search.' });
          }
    
          // Call the model to perform the search
          const results = await SongModel.search(keyword);
    
          // Return the results
          res.json(results);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
    }

    export default SearchController;