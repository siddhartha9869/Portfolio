var vid = document.querySelector("video");
var prev_btn = document.querySelector("#prev");
var next_btn = document.querySelector("#next");
var play_pause_btn = document.querySelector("#play_pause");
var speaker_btn = document.querySelector("#speaker");
var volume_range = document.querySelector("#volume_range");
var duration_range = document.querySelector("#duration_range");
var playlist = document.querySelector("#list_part ul");
var skip_left = document.querySelector("#skip_left");
var skip_right = document.querySelector("#skip_right");


var videos = [
    "videos/vid1.mp4",
    "videos/vid2.mp4",
    "videos/vid3.mp4",
    "videos/vid4.mp4"
]

for (let index = 0; index < videos.length; index++) {
    playlist.innerHTML += `<li class="song_list">Video ${index+1}</li>`;
}


var song_list = document.querySelectorAll(".song_list");
for (let index = 0; index < song_list.length; index++) {
    song_list[index].addEventListener("click",()=>{
        vid.src = videos[index];
        play_pause_btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        vid.play();
    });
}

var index = 0;
vid.onended = function () {
    index = (++index) % videos.length;
    vid.src = videos[index];
    vid.play();
}

prev_btn.addEventListener("click",()=>{
    index = (--index + videos.length)%videos.length;
    vid.src = videos[index];
    vid.play();
});

next_btn.addEventListener("click",()=>{
    index = (++index) % videos.length;
    vid.src = videos[index];
    vid.play();
});

function play_pause() {
    if (vid.paused) {
        vid.play();
        play_pause_btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        vid.pause();
        play_pause_btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function speaker() {
    if(vid.muted){
        vid.muted = false;
        volume_range.style.display = "block";
        speaker_btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        vid.muted = true;
        volume_range.style.display = "none";
        speaker_btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
}

function adj_volume() {
    vid.volume = volume_range.value/100;
}

vid.addEventListener("timeupdate",()=>{
    duration_range.value = (vid.currentTime/vid.duration)*100;
});

function duration_skip() {
    vid.currentTime = (duration_range.value/100)*vid.duration;
}


function leftSkip() {
    vid.currentTime -= 10;
    skip_left.style.opacity = "1";
    setTimeout(() => {
        skip_left.style.transition = "opacity 0.3s ease-out"
        skip_left.style.opacity = "0";
    }, 300);
}

function rightSkip() {
    vid.currentTime += 10;
    skip_right.style.opacity = "1";
    setTimeout(() => {
        skip_right.style.transition = "opacity 0.3s ease-out"
        skip_right.style.opacity = "0";
    }, 300);
}