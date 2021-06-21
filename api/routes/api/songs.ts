import express from 'express';
import data from '../../fake_data/data';
const router = express.Router();

router.get('/random_song', (req, res) => {
	res.json(data.random_song.name);
});

export default router;
