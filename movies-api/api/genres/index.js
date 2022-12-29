import { getGenres } from "../tmdb-api";
import express from "express";
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

export default router