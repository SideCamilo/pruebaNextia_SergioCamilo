const router = require('express').Router();

router.post('/register', async (req, res) => {

    res.json({
        error: null,
        data: 'data is going to be here!'
    })
})

module.exports = router;