
import db from '../config/db.config.js'

class ArtistController {
    constructor() {
        console.log('Class ArtistController instantiated');
    }

    list = (req,res) => {
        console.log('Hent alle Artist')
        const sql = `SELECT * FROM artist`
        db.query(sql, (error, result) => {
            if(error) {
                console.error(error);
                return res.status(500).json({error: 'Internal Server Error'})
            } else {
                return res.json(result);
            }
        });
    }

    details = (req,res) => {
        console.log('Get artist details');
        const { id } = req.params
        const sql = `SELECT * FROM artist WHERE id = ${id}`;
        db.query(sql,(error,result) => {
            if(error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error'})
            } else { 
                if (result.length === 0) {
                    return res.status(404).json({ error: 'Artist not found' });
                  }
                return res.json(result[0])
            }
        })
    }
}

export default ArtistController