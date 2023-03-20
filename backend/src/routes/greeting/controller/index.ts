import express from 'express';
import greeting from '../../../../app/greeting';

const router = express.Router();

export default function() {

    router.get('/greeting/:name', (req, res) => {
        const name = req.params.name;
        res.json({ greeting: greeting(name) });
    });

    return { root: '/', router };
}