const videos = [
    "videos/sports1.mp4",
    "videos/sports2.mp4",
    "videos/sports3.mp4"
];

let currentVideo = 0;

const bgVideo = document.getElementById("bg-video");

// Start with the first video
bgVideo.src = videos[currentVideo];
bgVideo.play();

// Change to the next video when the current one ends
bgVideo.addEventListener("ended", () => {

    currentVideo++;

    // Go back to the first video after the last one
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }

    bgVideo.src = videos[currentVideo];
    bgVideo.play();

});