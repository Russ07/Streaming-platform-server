const express = require('express');
const app = express();
const fs = require('fs');

// Function to read videos
function readVideos() {
    const videosFile = fs.readFileSync("../data/videos.json");
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// Function to write videos
function writeVideos(data) {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync("../data/videos.json", stringifiedData);
}