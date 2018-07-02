let express = require('express')
let app = express()
let path = require('path');

app.use(express.static(__dirname + '/public'))

app.listen(5000, function() {
    console.log('Running on port 5000')
});