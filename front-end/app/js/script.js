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

const musicSection = document.querySelector(".new");
const artistSection = document.querySelector(".grid-col-small");
const sideBarSection = document.querySelector(".songs");

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

  }).catch(error => console.error(error));
});

//function that displays All music section
function displaySongItem(songItems) {
  let displaySongs = songItems.map((item) => {
    return `<article id="${item.song_id}" class="release-cover rectgle">
        <img class="${item.icon_class}" src="${item.icon}" alt="play icon">
        <img class="cover-img" src=${item.song_image}  alt="">
        <h5 id="${item.song_name}">${item.song_name}</h5>
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
      <img class="artist-img" src="${item.song_image}" alt="">
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
      <h5>${item.song_name}<p>${item.artist_name}</p><img src="images/icons/play-circle-fill.svg" alt=""></h5>
    </li>`;
  });
  displaySideSongs = displaySideSongs.join("");
  sideBarSection.innerHTML = displaySideSongs;
}

const video = document.querySelector(".video");
const music = document.querySelector(".music");
const songs = document.querySelector(".songs");

video.onclick=() =>{
  songs.classList.add("fade");
  songs.classList.remove("show");
};
music.onclick=() =>{
  songs.classList.add("show");
  songs.classList.remove("fade");
};
