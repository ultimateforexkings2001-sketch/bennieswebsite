const videos = [
    "videos/home1.mp4",
    "videos/home2.mp4",
    "videos/home3.mp4"
];

let currentVideo = 0;

const bgVideo = document.getElementById("bg-video");

bgVideo.src = videos[currentVideo];
bgVideo.play();

bgVideo.addEventListener("ended", () => {

    currentVideo++;

    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }

    bgVideo.src = videos[currentVideo];
    bgVideo.play();

});