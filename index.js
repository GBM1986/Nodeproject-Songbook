import express from 'express'
import dotenv from 'dotenv'
import { SongRouter } from './routes/song.router.js'
import { ArtistRouter } from './routes/artist.router.js';
import { SearchRouter } from './routes/search.router.js';
dotenv.config()

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(SongRouter);
app.use(ArtistRouter);
app.use(SearchRouter);


app.listen(process.env.PORT, () => {
	console.log(`Server kører på port http://localhost:${process.env.PORT}`);
})