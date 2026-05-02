const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const playIcon = "https://i.pinimg.com/736x/63/19/86/6319864fd9988a4b08ef57c8cdf6b0b9.jpg";
const pauseIcon = "https://i.pinimg.com/736x/63/19/86/6319864fd9988a4b08ef57c8cdf6b0b9.jpg"; 
// (same image since you only gave one — I can upgrade later)

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

/* optional: visual feedback */
audio.onplay = () => {
  playBtn.style.transform = "scale(1.1)";
};

audio.onpause = () => {
  playBtn.style.transform = "scale(1)";
};
