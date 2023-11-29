import { error } from 'console';
import db from '../config/db.config.js'

class SongController {
    constructor() {
        console.log('Class Songcontroller instantiated')
    }

    list = (req,res) => {
        console.log('hent alle sange');
        const sql = `SELECT s.id, s.title, a.name
                        FROM song s
                        JOIN artist a
                        ON s.artist_id = a.id`
        db.query(sql, (error, result) => {
            if(error) {
                console.error(error)
            } else {
                return res.json(result)
            }
        })
    }
    
    details = (req,res) => {
        console.log('Hent detaljer');
        const { id } = req.params
        const sql = `SELECT s.id, s.title, s.content,
                                s.artist_id, a.name
                        FROM song s
                        JOIN artist a
                        ON s.artist_id = a.id
                        WHERE s.id = ${id}`
        db.query(sql,(error,result) => {
            if(error) {
                console.error(error)
            } else {
                return res.json(result)
            }
        })
    }
}

export default SongController