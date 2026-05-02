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

let lastX = 0;
let lastY = 0;

const cubes = [];
const MAX = 25;

document.addEventListener("mousemove", (e) => {
  const dx = e.pageX - lastX;
  const dy = e.pageY - lastY;

  lastX = e.pageX;
  lastY = e.pageY;

  // position cube slightly BEHIND cursor movement
  const cube = document.createElement("div");
  cube.className = "trail-box";

  cube.style.left = (e.pageX - dx * 0.6) + "px";
  cube.style.top = (e.pageY - dy * 0.6) + "px";

  document.body.appendChild(cube);
  cubes.push(cube);

  if (cubes.length > MAX) {
    cubes.shift().remove();
  }

  setTimeout(() => {
    cube.style.opacity = "0";
    cube.style.transform = "scale(0.3)";
  }, 40);

  setTimeout(() => cube.remove(), 300);
});
