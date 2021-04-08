const express = require('express');
const fetch = require('node-fetch')

const app = express();
app.use(express.static('public'))
app.listen(5000, () => {
    console.log('Listen on Port 5000')
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=994ca7702306bf763222109e0bab8593&language=de&page=1')
    .then(res => res.json())
        .then(data => {
            console.log(data);
            res.render('pages/index', { data: data })
        })
})