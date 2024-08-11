const express = require('express');
const app = express();
const fs = require('fs');

// Function to read trees
function readVideos() {
    const videosFile = fs.readFileSync('./data/trees.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}
