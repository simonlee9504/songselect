import express from 'express';
import songs from './api/songs';
const router = express.Router();

router.use('/songs', songs);

export default router;
