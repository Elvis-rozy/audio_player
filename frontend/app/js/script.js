/* eslint-disable no-unused-vars */
const button = document.querySelectorAll(".button");
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

const activeSongName= document.querySelector(".activeSongName");
const activeSongDetails= document.querySelector(".activeSongDetails");

const musicSection = document.querySelector(".new");
const searchResultSection = document.querySelector(".results");
const searchSection = document.querySelector(".search");
const textNote = document.querySelector(".text");
const artistSection = document.querySelector(".grid-col-small");
const sideBarSection = document.querySelector(".songs");
const videoSection = document.querySelector(".active-video");
const artist_details = document.querySelector(".artiste-details");
const artist_songs_section = document.querySelector(".artistOnlySongs");
const section = document.querySelectorAll(".sect");
const sectionB = document.querySelectorAll(".links li");

const discoverBtn = document.querySelector(".discovr");
const aboutBtn = document.querySelectorAll(".about");
const aboutSection = document.querySelector(".about-section");
const  categories = document.querySelector(".categories");

const  waves = document.querySelector(".wave");
const  details = document.querySelector(".details");
const  icons = document.querySelector(".icons");
const  bar = document.querySelector(".bar");
const  volume = document.querySelector(".vol");

discoverBtn.onclick = ()=> {
  aboutSection.classList.remove("in-view");
  aboutSection.classList.add("reg-heit");
  discover.style.background = "#010812";
  side_bar.style.background = "#0b101c";

  master_play.style.display = "flex";

  waves.style.display = "flex";
  track_image.style.display = "block";
  details.style.display = "block";
  icons.style.display = "block";
  currentStart.style.display = "block";
  bar.style.display = "block";
  currentEnd.style.display = "block";
  volume.style.display = "block";

  categories.style.visibility = "visible";
  sideBarSection.style.visibility = "visible";
  top_image.style.visibility = "visible";
  music_cards.style.visibility = "visible";
  artist_cards.style.visibility = "visible";
};

aboutBtn.forEach((btn) => {
  btn.onclick = () => {
    aboutSection.classList.remove("reg-heit");
    aboutSection.classList.add("in-view");
    discover.style.background = "#0f0114";
    side_bar.style.background = "#000";

    master_play.style.display = "none";

    waves.style.display = "none";
    track_image.style.display = "none";
    details.style.display = "none";
    icons.style.display = "none";
    currentStart.style.display = "none";
    bar.style.display = "none";
    currentEnd.style.display = "none";
    volume.style.display = "none";

    categories.style.visibility = "hidden";
    sideBarSection.style.visibility = "hidden";
    top_image.style.visibility = "hidden";
  };
});

let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let track_image = document.querySelector("#track_image");
let active_image = document.querySelector(".active-img");
let exit_icon = document.querySelector(".exit-icon");

let index = 0;
let track = document.createElement("audio");
let playbtn = document.getElementById("play");
let icon = document.getElementById("icon");
let playico = document.getElementById("playico");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let wave = document.getElementsByClassName("wave")[0];

let currentStart = document.getElementById("current-start");
let currentEnd = document.getElementById("current-end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

let vol_icon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol-dot");
let vol_bar= document.getElementsByClassName("vol-bar")[0];

let disc = document.getElementById("vid");

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    button.forEach(btn => btn.classList.remove("cta-on"));
    this.classList.add("cta-on");
  });
});

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
  track.pause();
  playbtn.src = "images/icons/play-fill.svg";
  wave.classList.remove("active2");

  //fetch API data containing all audio details
  fetch("app/JSON/video-data-2.json")
  .then(response => response.json())
  .then(data => {
    displayTopVideoItem(data);
    playTopVideo(data);
  });

  fetch("app/JSON/video-data.json")
  .then(response => response.json())
  .then(data => {
    //calling the display functions for the categories page
    displayVideoItem(data);
    playVideo(data);
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

function playVideo (vid) {
  let indz = 0;
  let nw_playing = false;
  Array.from(document.getElementsByClassName("vidplay")).forEach((elem)=>{
    elem.addEventListener("click", (e) => {
      if (nw_playing == false) {
        indz = e.target.id;
        indz -= 1;
        videoSection.style.display = "flex";
        console.log(indz);
        disc.src = vid[indz].video_src;
        nw_playing = true;
        disc.play();
      } else {
        videoSection.style.display = "none";
        nw_playing = false;
        disc.stop();
      }
    });
  });
}

function playTopVideo (vid) {
  let indz = 0;
  let nw_playing = false;
  Array.from(document.getElementsByClassName("topvidplay")).forEach((elem)=>{
    elem.addEventListener("click", (e) => {
      if (nw_playing == false) {
        indz = e.target.id;
        videoSection.style.display = "flex";
        indz -= 1;
        console.log(indz);
        disc.src = vid[indz].video_src;
        nw_playing = true;
        disc.play();
      } else {
        videoSection.style.display = "none";
        nw_playing = false;
        disc.pause();
      }
    });
  });
}

function displayVideoItem (videoitems) {
  let displayVideos = videoitems.map((item) => {
    return `<article id="${item.video_id}" class="release-cover rectgle video-height">
        <img id="${item.video_id}" class="vidplay" onclick="playVideo()" src="images/icons/video-play.svg" alt="play icon">
        <img class="video-size" src="${item.video_image}" alt="">
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
        <img id="${item.video_id}" class="topvidplay" onclick="playTopVideo()" src="images/icons/video-play.svg" alt="play icon">
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

//function that displays All music section
function displaySearchItem(songItems) {
  let displaySongs = songItems.map((item) => {
    return `<article id="${item.song_id}" class="release-cover rectgle">
        <img id="${item.song_id}" class="ico" src="images/icons/video-play.svg" alt="play icon">
        <img class="cover-img" src=${item.song_image}  alt="">
        <h5  class="h5"  id="${item.song_name}">${item.song_name}</h5>
        <p class="item-text">${item.song_info}</p>
      </article>`;
  });
  displaySongs = displaySongs.join("");
  searchSection.innerHTML = displaySongs;
}

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
      <img id="${item.artist_id}"  class="artist-img" src="${item.artist_image}" alt="">
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

//function that displays Artist songs section
function displayArtistSongs(sideItems) {
  let displaySideSongs = sideItems.map((item) => {
    return `<li class="son songListItem">
      <img src="${item.artist_image}" alt="cover image">
      <div class="song-details">
        <h5>${item.song_name}</h5>
        <p>${item.artist_name}</p>
      </div>
    </li>`;
  });
  displaySideSongs = displaySideSongs.join("");
  artist_songs_section.innerHTML = displaySideSongs;
}

//listening on page load to create categories page elements
window.addEventListener("DOMContentLoaded", () => {
  //fetch API data containing all audio details
  fetch("app/JSON/audiodata.json").then(response => response.json())
  .then(data => {

    //calling the display functions for the categories page
    displaySongItem(data);
    displayArtistItem(data);
    displaySidebarSongs(data);

    searchResultSection.style.display = "none";
    movie_cards.style.display = "none";
    top_movie_cards.style.display = "none";
    video_links.style.display = "none";
    videoSection.style.display = "none";
    artist_details.style.display = "none";
    aboutUs.style.display = "none";

    //Search bar Function
    const categories = [ ...new Set(data.map((item)=> { return item; })) ];
    let searching = true;
    document.getElementById("search-bar").addEventListener("input", (e)=> {
      searchResultSection.style.display = "block";
      music_cards.style.display = "none";
      artist_cards.style.display = "none";
      top_image.style.display = "none";

      const searchData = e.target.value.toLowerCase();
      const filterData = categories.filter((item)=> {
        if (item.song_name.toLocaleLowerCase().includes(searchData)) {
          return (item.song_name.toLocaleLowerCase().includes(searchData));
        } else if (item.artist_name.toLocaleLowerCase().includes(searchData)) {
          return (item.artist_name.toLocaleLowerCase().includes(searchData));
        }
      });
      if (searchData.length >= 1){
        displaySearchItem(filterData);
      } else if (searchData.length <= 0) {
        music_cards.style.display = "block";
        searchResultSection.style.display = "none";
        artist_cards.style.display = "block";
        top_image.style.display = "block";
      }
    });

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
          playbtn.src = "images/icons/pause-fill.svg";
          playing = true;
          track.src = data[indx].audio_src;
          track.play();
          wave.classList.add("active2");
          track_image.src = data[indx].song_image;
          active_image.src = data[indx].song_image;
          activeSongName.textContent = data[indx].artist_name + "  - " + data[indx].song_name;
          /* activeSongDetails.textContent = data[indx].song_details; */
          artist.innerHTML = data[indx].artist_name;
          title.innerHTML = data[indx].song_name;
        } else {
          e.target.src = "images/icons/play-circle-fill.svg";
          playbtn.src = "images/icons/play-fill.svg";
          track.src = data[indx].audio_src;
          playing = false;
          track.pause();
          wave.classList.remove("active2");
        }
      });
    });

    let ind = 0;
    let curr_playing = false;
    Array.from(document.getElementsByClassName("ico")).forEach((element)=>{
      element.addEventListener("click", (e) => {
        console.log(ind);

        if (curr_playing == false) {
          ind = e.target.id;
          e.target.src = "images/icons/pause-fill.svg";
          playbtn.src = "images/icons/pause-fill.svg";
          curr_playing = true;
          console.log(ind);
          track.src = data[ind].audio_src;
          track.play();
          wave.classList.add("active2");
          track_image.src = data[ind].song_image;
          active_image.src = data[ind].song_image;
          artist.innerHTML = data[ind].artist_name;
          title.innerHTML = data[ind].song_name;
        } else {
          e.target.src = "images/icons/play-circle-fill.svg";
          playbtn.src = "images/icons/play-fill.svg";
          track.src = data[ind].audio_src;
          curr_playing = false;
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
          playbtn.src = "images/icons/pause-fill.svg";
          now_playing = true;
          track.src = data[indix].audio_src;

          track.play();
          wave.classList.add("active2");
          track_image.src = data[indix].song_image;
          artist.innerHTML = data[indix].artist_name;
          title.innerHTML = data[indix].song_name;
        } else {
          e.target.src = "images/icons/video-play.svg";
          playbtn.src = "images/icons/play-fill.svg";
          track.src = data[indix].audio_src;
          now_playing = false;
          track.pause();
          wave.classList.remove("active2");
        }
      });
    });

    let inx = 0;
    Array.from(document.getElementsByClassName("circle")).forEach((element)=>{
      element.addEventListener("click", (e) => {
        inx = e.target.id;
        discover.style.display = "none";
        artist_details.style.display = "block";
        displayArtistSongs(data);
      });
    });
  }).catch(error => console.error(error));
});

exit_icon.addEventListener("click", ()=>{
  discover.style.display = "flex";
  artist_details.style.display = "none";
});

/*==================================
Seek Controls Setup
===================================*/
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

/*==================================
Volume Controls Setup
===================================*/
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