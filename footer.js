let reactBtn = document.querySelector('#react-btn');
let downloadBtn = document.querySelector('#download-btn');
let randomPlayBtn = document.querySelector('#randomPlayBtn');
let refreshBtn = document.querySelector('#refresh');

let reactColor = localStorage.getItem('reactColor') || 'skyblue';

function react() {
  if (reactColor === 'skyblue') {
    reactBtn.style.color = 'red';
    reactColor = 'red';
  } else {
    reactBtn.style.color = 'skyblue';
    reactColor = 'skyblue';
  }
  
  localStorage.setItem('reactColor', reactColor);
}


function reload() {
    react();
  }
  
  window.onload = reload;
  
function refresh(){
    return location.reload()
}


function downloadMusic() {
    loadTrack(trackIndex)

    const url = `${music_list[trackIndex].music}`; // replace with the URL of the audio file
    const filename = 'music.mp3'; // replace with the desired filename for the downloaded file
  
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }
 
function playRandom(){
  if(isRandom == true){
    randomPlayBtn.classList.remove('.fa-random')
    randomPlayBtn.classList.add('fa-not-equal')
    isRandom = false;
  }
  else{
    randomPlayBtn.classList.add('fa-random')
    randomPlayBtn.classList.remove('fa-not-equal')
    isRandom = true;
  }
}

playRandom();