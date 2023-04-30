let now_playing = document.querySelector('.header-text');
let song_name = document.querySelector('.song-name');
let singer_name = document.querySelector('.singer-name');
let song_img = document.querySelector('.track-img');
let previous_btn = document.querySelector('.previous-btn');
let play_btn = document.querySelector('.play-btn');
let next_btn = document.querySelector('.next-btn');
let progress_slider = document.querySelector('.slider')
let react_btn = document.querySelector('.fa-heart');
let curr_time = document.querySelector('.time');
let total_time = document.querySelector('.total-time');
let audioElement = document.createElement('audio');


let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

// Main Function
loadTrack(trackIndex);

function loadTrack(trackIndex) {
    clearInterval(updateTimer);

    song_img.style.backgroundImage = `url("${music_list[trackIndex].img}")`;
    console.log(trackIndex);

    song_name.innerHTML = `${music_list[trackIndex].name}`;
    singer_name.innerHTML = `${music_list[trackIndex].artist}`;
    const music_link = `${music_list[trackIndex].music}`
    audioElement.src = music_link;
    audioElement.type = 'audio/ogg';
    document.body.appendChild(audioElement);
}

function playMusic() {
    // curr_track.play();
    if(!isPlaying){
    isPlaying = true;
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');
    song_img.classList.add("fa-spin");
    audioElement.play();
  }else{
    isPlaying = false;
    play_btn.classList.add('fa-circle-play');
    play_btn.classList.remove('fa-circle-pause');
    song_img.classList.remove("fa-spin");
    audioElement.pause();
  }
}


  function previousMusic(){
    // curr_track.pause();
    clearInterval(updateTimer)
    isPlaying = true;
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');
    song_img.classList.add("fa-spin");
    audioElement.pause();

    if(trackIndex > 0  && isRandom === false){
      trackIndex -= 1;
    }else if (trackIndex < music_list.length - 1 && isRandom === true) {
      let random_index = Number.parseInt(Math.random() * music_list.length);
      trackIndex = random_index;
    }else{
      trackIndex = music_list.length - 1;
    }

    loadTrack(trackIndex);
    audioElement.play();
  }


  function nextMusic(){
    clearInterval(updateTimer);
    if (trackIndex < music_list.length - 1 && isRandom === false) {
      trackIndex += 1;
    } else if (trackIndex < music_list.length - 1 && isRandom === true) {
      let random_index = Number.parseInt(Math.random() * music_list.length);
      trackIndex = random_index;
    }else if (trackIndex < music_list.length - 1 && isRandom === true) {
      let randomIndex = Number.parseInt(Math.random() * music_list.length);
      trackIndex = randomIndex;
    } else {
      trackIndex = 0;
    }
    isPlaying = true;
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');
    song_img.classList.add("fa-spin");

    loadTrack(trackIndex);
    audioElement.play();
}


//loadedmetadata event to get the duration of the audio
audioElement.addEventListener('loadedmetadata', function() {
  const duration = Math.floor(audioElement.duration);
  total_time.innerHTML = formatTime(duration);
});

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function updateCurrTime() {
  // get the current time in seconds
  const currentTime = Math.floor(audioElement.currentTime);
  curr_time.innerHTML = formatTime(currentTime);
}

audioElement.addEventListener('timeupdate', function() {
  updateCurrTime();
});


updateTimer = setInterval(function() {
  updateCurrTime();
}, 1000);


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateProgress() {
  progress_slider.min = audioElement.currentTime;
  progress_slider.max = audioElement.duration;
  progress_slider.value = audioElement.currentTime;
}


audioElement.addEventListener('timeupdate', function() {
  updateProgress();
});


progress_slider.addEventListener('input', function() {
  const currentTime = (progress_slider.value / 100) * audioElement.duration;
  audioElement.currentTime = currentTime;
});

function updateProgress() {
  const currentTime = Math.floor(audioElement.currentTime);
  const duration = Math.floor(audioElement.duration);
  const progressPercent = (currentTime / duration) * 100;
  progress_slider.value = progressPercent;
  curr_time.textContent = formatTime(currentTime);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

updateProgress();

song_img.addEventListener('click',function(){
  playMusic();
})


document.addEventListener('keydown', keydown_event);
document.addEventListener('keyup', keyup_event);

function keydown_event(e) {
	
	let key = '';
	switch (e.key) {
		case 'ArrowUp':
			key = nextMusic();
			break;
		case 'ArrowDown':
			key = previousMusic();
			break;
		case 'ArrowLeft':
			key = previousMusic();
			break;
		case 'ArrowRight':
			key = nextMusic();
			break;
    }
  }

function keyup_event(e) {
  }