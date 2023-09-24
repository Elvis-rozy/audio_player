const button = document.querySelectorAll(".button");

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    button.forEach(btn => btn.classList.remove("cta-on"));
    this.classList.add("cta-on");
  });
});

const section = document.querySelectorAll(".sect");
const sectionB = document.querySelectorAll(".links li");

section.forEach((sect) => {
  sect.addEventListener("click", function () {
    section.forEach(sect => sect.classList.remove("active"));
    this.classList.add("active");
  });
});
sectionB.forEach((sect) => {
  sect.addEventListener("click", function () {
    sectionB.forEach(sect => sect.classList.remove("on"));
    this.classList.add("on");
  });
});

const video = document.querySelector(".video");
const music_cards = document.querySelector(".music-arr");
const movie_cards = document.querySelector(".movie-arr");
const nav = document.querySelector(".nav-bar");
const top_movie_cards = document.querySelector(".top-movies-arr");
const artist_cards = document.querySelector(".artist-arr");

const movieSection = document.querySelector(".video-sect");
const topMovieSection = document.querySelector(".top-video-sect");
const video_links = document.querySelector(".video-links");
const aboutUs = document.querySelector(".aboutUs");

const music = document.querySelector(".music");
const songs = document.querySelector(".songs");
const top_image= document.querySelector(".playing");
const master_play= document.querySelector(".master-play");

const side_bar= document.querySelector(".side-bar");
const discover= document.querySelector(".discover");

music.onclick=() =>{
  music_cards.style.display = "block";
  artist_cards.style.display = "block";
  master_play.style.display = "flex";
  top_image.style.display = "block";
  songs.style.display = "block";
  nav.style.display = "flex";

  top_movie_cards.style.display = "none";
  movie_cards.style.display = "none";
  video_links.style.display = "none";
  aboutUs.style.display = "none";


  side_bar.classList.add("height-music");
  discover.classList.add("height-music");
};

video.addEventListener("click", () => {
  //fetch API data containing all audio details
  fetch("app/JSON/video-data-2.json")
  .then(response => response.json())
  .then(data => {
    displayTopVideoItem(data);
  });

  fetch("app/JSON/video-data.json")
  .then(response => response.json())
  .then(data => {
    //calling the display functions for the categories page
    displayVideoItem(data);
    music_cards.style.display = "none";
    artist_cards.style.display = "none";
    master_play.style.display = "none";
    top_image.style.display = "none";
    songs.style.display = "none";
    nav.style.display = "none";

    top_movie_cards.style.display = "block";
    movie_cards.style.display = "block";
    video_links.style.display = "flex";
    aboutUs.style.display = "block";


    side_bar.classList.remove("height-music");
    discover.classList.remove("height-music");
  }).catch(error => console.error(error));
});

function displayVideoItem (videoitems) {
  let displayVideos = videoitems.map((item) => {
    return `<article id="${item.video_id}" class="release-cover rectgle video-height">
        <img id="${item.video_id}" class="vid-play" src="images/icons/video-play.svg" alt="play icon">
        <img class="video-size" src=${item.video_image}  alt="">
        <div class="top">
          <h5 id="${item.video_id}">${item.video_name}</h5>
          <h5>${item.video_year}</h5>
        </div>
        <p class="item-text abs">${item.video_group}</p>
        <div class="bottom">
          <p class="item-text">${item.video_duration}</p>
          <p class="item-text">${item.video_rating}</p>
        </div>
      </article>`;
  });
  displayVideos = displayVideos.join("");
  movieSection.innerHTML = displayVideos;
}

function displayTopVideoItem (videoitems) {
  let displayVideos = videoitems.map((item) => {
    return `<article id="${item.video_id}" class="release-cover rectgle video-height">
        <img id="${item.video_id}" class="vid-play" src="images/icons/video-play.svg" alt="play icon">
        <img class="video-size" src=${item.video_image}  alt="">
        <div class="top">
          <h5 id="${item.video_id}">${item.video_name}</h5>
          <h5>${item.video_year}</h5>
        </div>
        <p class="item-text abs">${item.video_group}</p>
        <div class="bottom">
          <p class="item-text">${item.video_duration}</p>
          <p class="item-text">${item.video_rating}</p>
        </div>
      </article>`;
  });
  displayVideos = displayVideos.join("");
  topMovieSection.innerHTML = displayVideos;
}

const musicSection = document.querySelector(".new");
const artistSection = document.querySelector(".grid-col-small");
const sideBarSection = document.querySelector(".songs");
const videoSection = document.querySelector(".video-playing");

let indix = 0;
let now_playing = false;
Array.from(document.getElementsByClassName("vid-play")).forEach((elem)=>{
  elem.addEventListener("click", (e) => {
    if (now_playing == false) {
      indix = e.target.id;
      e.target.src = "images/icons/pause-fill.svg";
      now_playing = true;
      console.log("done");

      track.play();
      wave.classList.add("active2");
    } else {
      e.target.src = "images/icons/video-play.svg";
      now_playing = false;
      track.pause();
      wave.classList.remove("active2");
    }
  });
});


//listening on page load to create categories page elements
window.addEventListener("DOMContentLoaded", () => {
  //fetch API data containing all audio details
  fetch("app/JSON/audiodata.json")
  .then(response => response.json())
  .then(data => {
    //calling the display functions for the categories page
    displaySongItem(data);
    displayArtistItem(data);
    displaySidebarSongs(data);

    movie_cards.style.display = "none";
    top_movie_cards.style.display = "none";
    video_links.style.display = "none";
    videoSection.style.display = "none";
    aboutUs.style.display = "none";

  }).catch(error => console.error(error));
});

//function that displays All music section
function displaySongItem(songItems) {
  let displaySongs = songItems.map((item) => {
    return `<article id="${item.song_id}" class="release-cover rectgle">
        <img id="${item.song_id}" class="icon" src="images/icons/video-play.svg" alt="play icon">
        <img class="cover-img" src=${item.song_image}  alt="">
        <h5  class="h5"  id="${item.song_name}">${item.song_name}</h5>
        <p class="item-text">${item.song_info}</p>
      </article>`;
  });
  displaySongs = displaySongs.join("");
  musicSection.innerHTML = displaySongs;
}

//function that displays Artists section
function displayArtistItem(artistItems) {
  let displayArtists = artistItems.map((item) => {
    return `<article class="release-cover circle">
      <img class="artist-img" src="${item.artist_image}" alt="">
    </article>`;
  });
  displayArtists = displayArtists.join("");
  artistSection.innerHTML = displayArtists;
}

//function that displays SideBar section
function displaySidebarSongs(sideItems) {
  let displaySideSongs = sideItems.map((item) => {
    return `<li class="songListItem">
      <span>01</span>
      <img src="${item.song_image}" alt="cover image">
      <div class="song-details">
        <h5>${item.song_name}</h5>
        <p>${item.artist_name}</p>
      </div>
      <img id="${item.song_id}" class="playico" src="images/icons/play-circle-fill.svg" alt="">
    </li>`;
  });
  displaySideSongs = displaySideSongs.join("");
  sideBarSection.innerHTML = displaySideSongs;
}

let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let track_image = document.querySelector("#track_image");

let index = 0;
let track = document.createElement("audio");
let playbtn = document.getElementById("play");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let wave = document.getElementsByClassName("wave")[0];


//listening on page load to create categories page elements
window.addEventListener("DOMContentLoaded", () => {
  //fetch API data containing all audio details
  fetch("app/JSON/audiodata.json").then(response => response.json())
  .then(data => {

    function load_track (index) {
      track.src =  data[index].audio_src;
      title.innerHTML = data[index].song_name;
      artist.innerHTML = data[index].artist_name;
      track_image.src = data[index].song_image;
    }
    load_track(index);

    next.onclick = function () {
      index++;
      load_track(index);
      track.play();
      playbtn.src = "images/icons/pause-fill.svg";
    };

    prev.onclick = function () {
      index--;
      load_track(index);
      track.play();
      playbtn.src = "images/icons/pause-fill.svg";
    };

    playbtn.onclick = function play () {
      if (track.paused || track.currentTime <= 0) {
        track.play();
        playbtn.src = "images/icons/pause-fill.svg";
        wave.classList.add("active2");
      } else {
        track.pause();
        playbtn.src = "images/icons/play-fill.svg";
        wave.classList.remove("active2");
      }
    };

    let indx = 0;
    let playing = false;
    Array.from(document.getElementsByClassName("playico")).forEach((element)=>{
      element.addEventListener("click", (e) => {
        if (playing == false) {
          indx = e.target.id;
          e.target.src = "images/icons/pause-fill.svg";
          playing = true;
          console.log(indx);
          track.src = data[indx].audio_src;
          track.play();
          wave.classList.add("active2");
          track_image.src = data[indx].song_image;
          artist.innerHTML = data[indx].artist_name;
          title.innerHTML = data[indx].song_name;
        } else {
          e.target.src = "images/icons/play-circle-fill.svg";
          track.src = data[indx].audio_src;
          playing = false;
          track.pause();
          wave.classList.remove("active2");
        }
      });
    });

    let indix = 0;
    let now_playing = false;
    Array.from(document.getElementsByClassName("icon")).forEach((elem)=>{
      elem.addEventListener("click", (e) => {
        if (now_playing == false) {
          indix = e.target.id;
          e.target.src = "images/icons/pause-fill.svg";
          now_playing = true;
          track.src = data[indix].audio_src;

          track.play();
          wave.classList.add("active2");
          track_image.src = data[indix].song_image;
          artist.innerHTML = data[indix].artist_name;
          title.innerHTML = data[indix].song_name;
        } else {
          e.target.src = "images/icons/video-play.svg";
          track.src = data[indix].audio_src;
          now_playing = false;
          track.pause();
          wave.classList.remove("active2");
        }
      });
    });
  }).catch(error => console.error(error));
});

let currentStart = document.getElementById("current-start");
let currentEnd = document.getElementById("current-end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

track.addEventListener("timeupdate", () => {
  let music_curr = track.currentTime;
  let music_dur = track.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((track.currentTime/track.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  track.currentTime = seek.value * track.duration/100;
});

track.addEventListener("ended", () => {
  playbtn.src = "images/icons/play-fill.svg";
  wave.classList.remove("active2");
});

//Volume Controls Setup
let vol_icon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol-dot");
let vol_bar= document.getElementsByClassName("vol-bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.src = "images/icons/volume-mute-fill.svg";
  }
  if (vol.value > 0) {
    vol_icon.src = "images/icons/volume-down.svg";
  }
  if (vol.value > 50) {
    vol_icon.src = "images/icons/volume-up-fill.svg";
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  track.volume = vol_a/100;
});