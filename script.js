function loadVideo(videoPath) {
    var videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = 
        <video controls>
            <source src="https://www.youtube.com/watch?v=l1EssrLxt7E" type="video/mp4"></source>
        </video>;
}
document.getElementById("html-intro").addEventListener("click", function() {
    loadVideo("https://www.youtube.com/watch?v=l1EssrLxt7E");
});


