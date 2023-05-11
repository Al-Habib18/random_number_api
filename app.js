const express = require('express');
const random_router = require('./routes')
const not_found = require('./errors/not_found_handler')
const error_handler = require('./errors/error_handler')

const app = express();

app.use('/random',random_router) ;

app.get('/', (req, res) => {
    res.send('<h2>To get random number,  Go to \' .../random \' and give a proper query string</h2>');
  })

app.use(not_found)
app.use(error_handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
