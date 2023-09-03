let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let track_image = document.querySelector("#track_image");

/* let timer; */
let index = 0;
//let track = document.createElement("audio");
let track = document.getElementById("audio");
let playbtn = document.getElementById("play");
let prev = document.getElementById("prev");
let next = document.getElementById("next");


//listening on page load to create categories page elements
window.addEventListener("DOMContentLoaded", () => {
  //fetch API data containing all audio details
  fetch("app/JSON/audiodata.json")

  .then(response => response.json())
  .then(data => {
    //calling the display functions for the categories page

    function load_track (index) {
      console.log(data[index].artist_name);
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
      if (track.paused) {
        track.play();
        playbtn.src = "images/icons/pause-fill.svg";
      } else {
        track.pause();
        playbtn.src = "images/icons/play-fill.svg";
      }
    };
  }).catch(error => console.error(error));
});