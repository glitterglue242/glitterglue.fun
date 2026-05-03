const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const playIcon = "https://i.pinimg.com/736x/63/19/86/6319864fd9988a4b08ef57c8cdf6b0b9.jpg";
const pauseIcon = "https://i.pinimg.com/736x/63/19/86/6319864fd9988a4b08ef57c8cdf6b0b9.jpg";

/* 🎵 PLAY / PAUSE */
function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

/* ✨ button feedback */
audio.onplay = () => {
  playBtn.style.transform = "scale(1.1)";
};

audio.onpause = () => {
  playBtn.style.transform = "scale(1)";
};

/* 🧊 TRAIL (behind cursor) */
let lastX = 0;
let lastY = 0;

const cubes = [];
const MAX = 25;

document.addEventListener("mousemove", (e) => {
  const dx = e.pageX - lastX;
  const dy = e.pageY - lastY;

  lastX = e.pageX;
  lastY = e.pageY;

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

/* 🕒 UPDATED TIME (clean version) */
function updateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById("lastUpdated").innerText =
    "🕒 Updated " + time;
}

// run once + loop
updateTime();
setInterval(updateTime, 1000);
