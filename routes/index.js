
const router = require('express').Router();

const middleware = require('./middleware');


router.get('/', middleware, (req, res) => {
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);

    const result = Math.floor(Math.random() * (end - start + 1)) + start // generate random randnumber
   res.json({"result": result})
});


module.exports = router;
