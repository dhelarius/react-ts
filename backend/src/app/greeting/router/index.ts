import express from 'express';

const router = express.Router();

export default function() {

    router.get('/greeting', async (req, res) => {
        res.json({ greeting: 'Hello, world!' })
    });

    return { root: '/', router };
}