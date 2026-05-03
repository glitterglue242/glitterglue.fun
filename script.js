const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.style.transform = "scale(1.1)";
  } else {
    audio.pause();
    playBtn.style.transform = "scale(1)";
  }
};
