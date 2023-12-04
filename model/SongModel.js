// SongModel.js
import db from '../config/db.config.js';

class SongModel {
  static search = async (keyword) => {
    try {
      const query = `
        SELECT * FROM songs
        WHERE title ILIKE $1 OR artist ILIKE $1 OR content ILIKE $1
      `;

      const result = await db.query(query, [`%${keyword}%`]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
}

export default SongModel;
