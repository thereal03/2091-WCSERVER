const express = require('express');
const app = express();

//use the middleware required for serving static
app.use(express.static('public'));

//create the route to serve a static index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404 page not found<h1/>');
});

//Setting the listerner to ENV PORT info
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
