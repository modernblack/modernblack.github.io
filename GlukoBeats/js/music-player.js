let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let ALL_songs = [
  {
  	name: "Already",
  	path: "./music/song1.mp3",
  	img: "img/img1.jpg",
  	artist: "Gluko Beats"
  },
  {
  	name: "Glue",
  	path: "./music/song2.mp3",
  	img: "img/img2.jpg",
  	artist: "Gluko Beats"
  },
  {
  	name: "I got cash",
  	path: "./music/song3.mp3",
  	img: "img/img3.jpg",
  	artist: "Gluko Beats"
  },
  {
  	name: "Sock",
  	path: "./music/song4.mp3",
  	img: "img/img4.jpg",
  	artist: "Gluko Beats"
  }
];

function loadTrack(index_no){
	clearInterval(timer);
	reset_slider();
	track.src = ALL_songs[index_no].path;
	title.innerHTML = ALL_songs[index_no].name;
	track_image.src = ALL_songs[index_no].img;
	artist.innerHTML = ALL_songs[index_no].artist;
	track.load();

	total.innerHTML = ALL_songs.length;
	present.innerHTML = index_no + 1;
	timer = setInterval(rangeSlider, 1000);
}
loadTrack(index_no);

function muteSound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

function reset_slider(){
	slider.value = 0;
}

function justPlay(){
	if (playing_song==false){
		playSong();
	}else{
		pauseSong();
	}
}

function playSong(){
	track.play();
	playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pauseSong(){
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}
function nextSong(){
	if (index_no < ALL_songs.length - 1) {
		index_no += 1;
		loadTrack(index_no);
		playSong();
	}else{
		index_no = 0;
		loadTrack(index_no);
		playSong();
	}
}

function previousSong(){
	if (index_no > 0) {
		index_no -= 1;
		loadTrack(index_no);
		playSong();
	}else{
		index_no = ALL_songs.length;
		loadTrack(index_no);
		playSong();
	}
}

function volumeChange(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

function changeDuration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function autoPlaySwitch(){
	if (autoplay==1){
		autoplay = 0;
		auto_play.style.background = "rgba(255, 255, 255, 0.2)";
	}else{
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}

function rangeSlider(){
	let position = 0;
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}
	if (track.ended){
		play.innerHTML = '<i class="fa fa-play"></i>';
		if (autoplay==1){
			index_no += 1;
			loadTrack(index_no);
			playSong();
		}
	}
}