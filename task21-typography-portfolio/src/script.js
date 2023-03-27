document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });
});

// Закрыть меню при нажатии на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Действие при клике
    document.querySelector(".header").classList.remove("open");
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open");
});

//

// PORTFOLIO IMAGES - WINTER SUMMER AUTUMN SPRING

const tabsButtons = document.querySelectorAll(".tabs__buttons__button");
const tabsImages = document.querySelectorAll(".pictures-flex-item img");

const springImages = [
  "https://images.unsplash.com/photo-1600851184880-db4ecb672052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1631885134169-4632f533f0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
  "https://images.unsplash.com/photo-1585234839491-6d2fba9c0646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1620322049908-fc2f2265e0ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1542461927-dd68c85adc56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
];

const summerImages = [
  "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80",
  "https://images.unsplash.com/photo-1619947603049-1cc0708f336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1597353246571-3204cef9405d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1625054790108-6a5fb0c174af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
];

const winterImages = [
  "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1511489731872-324afc650052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  "https://images.unsplash.com/photo-1517918558653-3a2c5ab393a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1518374895823-ee01662288c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  "https://images.unsplash.com/photo-1554956742-32f116cf57af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];

const autumnImages = [];
for (let i = 0; i < tabsImages.length; i++) {
  autumnImages.push(tabsImages[i].src);
}

tabsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Очистка от класса актив
    tabsButtons.forEach((button) => {
      button.classList.remove("active");
    });

    //добавление
    if (button.innerText === "Spring") {
      button.classList.add("active");

      for (let i = 0; i < tabsImages.length; i++) {
        tabsImages[i].src = `${springImages[i]}`; //tabsImages[0].src
      }
    } else if (button.innerText === "Summer") {
      button.classList.add("active");

      for (let i = 0; i < tabsImages.length; i++) {
        tabsImages[i].src = `${summerImages[i]}`; //tabsImages[0].src
      }
    } else if (button.innerText === "Winter") {
      button.classList.add("active");

      for (let i = 0; i < tabsImages.length; i++) {
        tabsImages[i].src = `${winterImages[i]}`; //tabsImages[0].src
      }
    } else if (button.innerText === "Autumn") {
      button.classList.add("active");

      for (let i = 0; i < tabsImages.length; i++) {
        if (tabsImages[i].src.includes("autumn")) {
          continue;
        }
        tabsImages[i].src = `${autumnImages[i]}`;
      }
    }
  });
});

//

// VIDEO PLAYER - VIDEO PLAYER - VIDEO PLAYER - VIDEO PLAYER

//

const container = document.querySelector(".container2");
const mainVideo = container.querySelector("video");
const videoTimeLine = container.querySelector(".video-timeline");
const progressBar = container.querySelector(".progress-bar");
const volumeBtn = container.querySelector(".volume i");
const volumeSlider = container.querySelector(".options.left input");
const skipBackward = container.querySelector(".skip-backward i");
const skipForward = container.querySelector(".skip-forward i");
const playPauseBtn = container.querySelector(".play-pause i");
const speedBtn = container.querySelector(".playback-speed span");
const speedOptions = container.querySelector(".speed-options");
const picInPicBtn = container.querySelector(".pic-in-pic span");
const fullscreenBtn = container.querySelector(".fullscreen");
const currentVideoTime = container.querySelector(".current-time");
const videoDuration = container.querySelector(".video-duration");
//
const videoBg = document.querySelector(".bg-video-wp img");
const playIcon = document.querySelector(".video-play-icon");
const videoScreen = document.querySelector(".container2 video");

let timer;

const hideControls = () => {
  if (mainVideo.paused) return;
  timer = setTimeout(() => {
    container2.classList.remove("show-controls");
  }, 3000);
};

container.addEventListener("mousemove", () => {
  container2.classList.add("show-controls");
  clearTimeout(timer);
  hideControls();
});

mainVideo.volume = 0.5;

volumeSlider.value = mainVideo.volume * 100;

progressBar.style.width = "0%";

const formatTime = (time) => {
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;

  if (hours == 0) {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

mainVideo.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;

  currentVideoTime.innerHTML = formatTime(currentTime);
});

mainVideo.addEventListener("loadeddata", (e) => {
  videoDuration.innerHTML = formatTime(e.target.duration);
});

skipBackward.addEventListener("click", () => {
  mainVideo.currentTime -= 5;
});

skipForward.addEventListener("click", () => {
  mainVideo.currentTime += 5;
});

playPauseBtn.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
    playIcon.style.display = "none";
    videoBg.style.display = "none";
  } else {
    mainVideo.pause();
    playIcon.style.display = "block";
  }
});

mainVideo.addEventListener("play", () => {
  playPauseBtn.classList.replace("fa-play", "fa-pause");
});

mainVideo.addEventListener("pause", () => {
  playPauseBtn.classList.replace("fa-pause", "fa-play");
});

volumeBtn.addEventListener("click", () => {
  mainVideo.muted =
    mainVideo.muted == false
      ? (mainVideo.muted = true)
      : (mainVideo.muted = false);
  if (mainVideo.muted == true) {
    volumeSlider.value = 0;
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  } else {
    volumeSlider.value = mainVideo.volume * 100;
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  }
});

volumeSlider.addEventListener("input", (e) => {
  mainVideo.volume = e.target.value / 100;
  if (e.target.value == 0) {
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  } else {
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  }
});

speedBtn.addEventListener("click", () => {
  speedOptions.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    e.target.tagName !== "SPAN" ||
    e.target.className !== "material-symbols-rounded"
  ) {
    speedOptions.classList.remove("show");
  }
});

speedOptions.querySelectorAll("li").forEach((option) => {
  option.addEventListener("click", () => {
    mainVideo.playbackRate = option.dataset.speed;
    speedOptions.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

picInPicBtn.addEventListener("click", () => {
  mainVideo.requestPictureInPicture();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("pressed escape");
    container2.classList.remove("fullscreen"); // CONTAINER2 ???
    fullscreenBtn.classList.replace("fa-compress", "fa-expand");
    return document.exitFullscreen();
  }
  if (e.code === "Space") {
    e.preventDefault();
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
  }
});

fullscreenBtn.addEventListener("click", () => {
  container.classList.toggle("fullscreen"); // CONTAINER2 ???
  if (document.fullscreenElement) {
    fullscreenBtn.classList.replace("fa-compress", "fa-expand");
    return document.exitFullscreen();
  }
  fullscreenBtn.classList.replace("fa-expand", "fa-compress");
  container.requestFullscreen();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("pressed escape");
    container.classList.remove("fullscreen");
    fullscreenBtn.classList.replace("fa-compress", "fa-expand");
    return document.exitFullscreen();
  }
});

videoTimeLine.addEventListener("click", (e) => {
  let timelineWidth = e.target.clientWidth;

  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

videoTimeLine.addEventListener("mousemove", (e) => {
  const progressTime = videoTimeLine.querySelector("span");
  let offsetX = e.offsetX;
  progressTime.style.left = `${offsetX}px`;
  let timelineWidth = videoTimeLine.clientWidth;
  let percent = (e.offsetX / timelineWidth) * mainVideo.duration;
  progressTime.innerHTML = formatTime(percent);
});

videoTimeLine.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", draggableProgressBar);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", draggableProgressBar);
});

const draggableProgressBar = (e) => {
  e.preventDefault();
  let timelineWidth = e.target.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;

  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentVideoTime.innerHTML = formatTime(mainVideo.currentTime);
};

playIcon.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
    playIcon.style.display = "none";
    container.style.zIndex = 0;
  } else {
    mainVideo.pause();
    playIcon.style.display = "block";
  }
});

videoScreen.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
    playIcon.style.display = "none";
  } else {
    mainVideo.pause();
    playIcon.style.display = "block";
  }
});
