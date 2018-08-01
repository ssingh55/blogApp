const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogModule = require('../module/blogModule');

// app.use(express.static(path.resolve('./dist')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static(path.resolve("../build")))
// app.use(express.static("static"))
//send the index file
app.use(express.static(path.resolve("../build/static")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('../build/index.html'));
})

//get the data
app.get('/api/blogs', (req, res) => {
    blogModule.find({}).then(function (data) {
        res.send(data)
    })
})

//add a new data
app.post('/api/blogs', async (req, res) => {
    var bodyData = await req.body;
    blogModule.create(bodyData).then(function (data) {
        res.send(data);
    });
});

//delete a data
app.delete('/api/blogs/:id', (req, res) => {
    blogModule.findOneAndRemove({ _id: req.params.id }).then(function (data) {
        res.send(data)
        // res.send({type:'DELETE'})
    })
})

//update a data
app.put('/api/blogs/:id', async (req, res) => {
    var bodyData = await req.body;
    console.log(bodyData);
    
    blogModule.findOneAndUpdate({ _id: req.params.id }, {$set:{text: bodyData.text,description: bodyData.description}}).then(function (data) {
        // blogModule.findOne({ key: req.params.id }).then(function (data) {
            res.send(data)
        // })
    })
})

//start listening on the port
app.listen(port, () => {
    console.log('listening on port ' + port)
})