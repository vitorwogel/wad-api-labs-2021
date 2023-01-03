import express from 'express';
import TvSchema from './tvModel';
import asyncHandler from 'express-async-handler';
import {
    getTvShows,
    getShowImages,
    getTvShow
} from '../tmdb-api';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    const tvShows = await getTvShows();
    res.status(200).json(tvShows);
}));

// Get tvShow details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvShow = await getTvShow(id)
    if (tvShow) {
        res.status(200).json(tvShow);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/images', asyncHandler( async(req, res) => {
    const showImages = await getShowImages()
    res.status(200).json(showImages)
}))

export default router;