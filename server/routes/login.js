import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    let result = login(req.body);
    res.json(result);
})

router.post('/register', (req, res) => {
    let result = register(req.body);
    res.json(result);
})

router.get('/logout', (req, res) => {

})

export default router