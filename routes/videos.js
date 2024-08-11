const express = require('express');
const fs = require('fs');
const router = express.Router();

// Function to read videos
function readVideos() {
    const videosFile = fs.readFileSync("./data/videos.json");
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// Function to write videos

function writeVideos(data) {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync("./data/videos.json", stringifiedData);
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





module.exports = router;