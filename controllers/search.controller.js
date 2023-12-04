import SongModel from '../model/SongModel.js'

class SearchController {
    constructor() {
        console.log('Class SearchController instantiated')
    }

    search = async (req, res) => {
        try {
          const {keyword} = req.query;
    
         
          if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required for search.' });
          }
    
      
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