const express = require('express');
const fs = require('fs');
const router = express.Router();
const uuid4 = require("uuid4");

// Function to read videos
function readVideos() {
    const videosFile = fs.readFileSync("./data/videos.json");
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// Function to write videos
function writeVideos(data) {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync("./data/videos.json", stringifiedData, null, 2);
}

// GET /videoList
router.get('/videos', (req, res) => {

    // 1. Read the videos data (and parse it)
    const videosData = readVideos();

    // 2. Strip down the videos data
    const strippedData = videosData.map((video) => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }; 
    });

    // 3. Respond with that data
    res.json(strippedData);
    
});

router.get('/videos/:id', (req, res) =>{
    // 1. Read the videos data (and parse it)
    const videosData = readVideos();
    // 2. find video with given id
    const videoId = videosData.find((v) => v.id === req.params.id);
    // 3. Respond with that data
    res.json(videoId);
});

router.post('/videos', (req, res) => {
    // 1. Read the videos data (and parse it)
    const  videoData = readVideos();

    // 2. Create a new object 
    const newVideo = {
        "id": uuid4(),
        "title": req.body.title,
        "channel": "Palace Holder aka King",
        "image": "http://localhost:8080/images/placeholder.jpg",
        "description": req.body.description,
        "views": "0",
        "likes": "0",
        "duration": "0",
        "video": "placeholder",
        "timestamp": Date.now(),
        "comments": []
    }
    // 3. insert data in array
    videoData.push(newVideo);

    // 4. Write new data to the file
    writeVideos(videoData);

    res.status(200).json(newVideo);


});





module.exports = router;