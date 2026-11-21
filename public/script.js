document.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollPercentage = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-container").style.display = "block";
  document.getElementById("progress-bar").style.width = scrollPercentage + "%";
});

const portfolioSwitcher = document.querySelector(".portfolio-switcher");
const routeLoadingOverlay = document.getElementById("route-loading-overlay");

if (portfolioSwitcher && routeLoadingOverlay) {
  portfolioSwitcher.addEventListener("click", function (event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    routeLoadingOverlay.classList.add("is-active");
    routeLoadingOverlay.setAttribute("aria-hidden", "false");

    window.requestAnimationFrame(function () {
      window.location.assign(portfolioSwitcher.href);
    });
  });
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const downloadLink = document.getElementById("downloadLink");
const QR = document.getElementById("scanButton");
const swalCustomButton = Swal.mixin({
  customClass: {
    cancelButton: "custom-swal-cancel",
    confirmButton: "custom-swal-confirm",
  },
});
const swalQR = Swal.mixin({
  customClass: {
    cancelButton: "custom-swal-cancel",
  },
});
downloadLink.addEventListener("click", function (event) {
  event.preventDefault();
  viewFile();

  // swalCustomButton
  //   .fire({
  //     html: '<h3 id="h3">Confirm Action</h3><br><i class="bx bx-question-mark custom-swal-icon"></i><br><br><p id="p">Choose an action:</p>',
  //     icon: null,
  //     // showCancelButton: true,
  //     confirmButtonText: "Download",
  //     // cancelButtonText: "Cancel",
  //     showDenyButton: true,
  //     denyButtonText: "View",
  //     customClass: {
  //       popup: "custom-swal-popup",
  //       confirmButton: "custom-swal-confirm",
  //       denyButton: "custom-swal-cancel",
  //       // cancelButton: "custom-swal-cancel",
  //       icon: "custom-swal-icon",
  //     },
  //   })
  //   .then((result) => {
  //     if (result.isConfirmed) {
  //       downloadFile();
  //     } else if (result.isDenied) {
  //       viewFile();
  //     }
  //   });
});

function downloadFile() {
  const a = document.createElement("a");
  a.href =
    "https://docs.google.com/document/d/1qdoSzNcjO_g1etzvseIELnX-8TGXc_yqhkcfYYynQDM/edit?usp=sharing";
  a.target = "_blank";
  a.click();
}

function viewFile() {
  const a = document.createElement("a");
  a.href =
    "https://docs.google.com/document/d/1qdoSzNcjO_g1etzvseIELnX-8TGXc_yqhkcfYYynQDM/edit?usp=sharing";
  a.target = "_blank";
  a.click();
}

QR.addEventListener("click", function (event) {
  event.preventDefault();
  swalQR.fire({
    html: '<div><img src="certificates/QR.png" alt=""></div>',
    icon: null,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      popup: "custom-swal-popup",
      cancelButton: "custom-swal-cancel",
      icon: "custom-swal-icon",
    },
  });
});

const words = document.querySelectorAll(".word");
const roleContainer = document.querySelector(".animated-words");
const reduceRoleMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let roleDustField = null;

if (roleContainer && words.length) {
  roleDustField = document.createElement("span");
  roleDustField.className = "role-dust-field";
  roleDustField.setAttribute("aria-hidden", "true");
  roleContainer.append(roleDustField);
}

words.forEach((word, wordIndex) => {
  const parts = word.textContent.replace(/\u00a0/g, " ").split(/(\s+)/);
  word.textContent = "";
  parts.forEach((part) => {
    if (/^\s+$/.test(part)) {
      word.append(document.createTextNode(part));
      return;
    }

    const wordPart = document.createElement("span");
    wordPart.className = "role-word";
    part.split("").forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.className = wordIndex === 0 ? "letter in" : "letter behind";
      wordPart.append(span);
    });
    word.append(wordPart);
  });
  word.style.opacity = wordIndex === 0 ? "1" : "0";
});

let currentWordIndex = 0;
const maxWordIndex = words.length - 1;
const roleDustColors = ["#c6dce4", "#76c6d5", "#d08a6a", "#e8e5d9"];

function emitRoleDust(letter, containerRect) {
  if (!roleDustField || !letter.textContent.trim()) return;

  const rect = letter.getBoundingClientRect();
  const particleCount = 2 + Math.floor(Math.random() * 3);

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");
    const size = 1.5 + Math.random() * 2.8;
    const driftX = 16 + Math.random() * 52;
    const driftY = (Math.random() - 0.44) * 66;
    const delay = Math.random() * 300;
    particle.className = "role-dust-particle";
    particle.style.left = `${rect.left - containerRect.left + Math.random() * rect.width}px`;
    particle.style.top = `${rect.top - containerRect.top + Math.random() * rect.height}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor =
      roleDustColors[Math.floor(Math.random() * roleDustColors.length)];
    particle.style.setProperty("--dust-x", `${driftX}px`);
    particle.style.setProperty("--dust-y", `${driftY}px`);
    particle.style.setProperty("--dust-rotate", `${Math.random() * 220 - 110}deg`);
    roleDustField.append(particle);

    window.setTimeout(() => particle.classList.add("is-flying"), 16 + delay);
    window.setTimeout(() => particle.remove(), 2000 + delay);
  }
}

function changeText() {
  if (words.length < 2) return;

  const currentWord = words[currentWordIndex];
  const nextWord = words[currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1];
  const containerRect = roleContainer.getBoundingClientRect();
  const currentLetters = currentWord.querySelectorAll(".letter");
  const nextLetters = nextWord.querySelectorAll(".letter");

  if (!reduceRoleMotion) {
    currentLetters.forEach((letter) => {
      const driftX = 12 + Math.random() * 38;
      const driftY = (Math.random() - 0.55) * 32;
      const delay = Math.random() * 300;
      emitRoleDust(letter, containerRect);
      letter.style.setProperty("--dust-x", `${driftX}px`);
      letter.style.setProperty("--dust-y", `${driftY}px`);
      letter.style.setProperty("--dust-rotate", `${Math.random() * 30 - 15}deg`);
      letter.style.setProperty("--dust-delay", `${delay}ms`);
      letter.className = "letter dusting";
    });
  } else {
    currentLetters.forEach((letter) => {
      letter.className = "letter behind";
    });
  }

  nextWord.style.opacity = "1";
  nextLetters.forEach((letter, index) => {
    letter.style.setProperty("--role-in-delay", `${Math.min(index * 16, 420)}ms`);
    letter.className = reduceRoleMotion ? "letter in" : "letter materialize";
  });

  window.setTimeout(() => {
    currentWord.style.opacity = "0";
    currentLetters.forEach((letter) => {
      letter.className = "letter behind";
    });
    nextLetters.forEach((letter) => {
      letter.className = "letter in";
    });
  }, reduceRoleMotion ? 0 : 1800);

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

if (words.length > 1) window.setInterval(changeText, 7000);

const rainCanvas = document.querySelector(".hero-atmosphere__rain");
const rainContext = rainCanvas?.getContext("2d", { alpha: true });

if (rainCanvas && rainContext && !reduceRoleMotion) {
  let rainWidth = 0;
  let rainHeight = 0;
  let rainScale = 1;
  let rainDrops = [];
  let rainFrame = 0;
  let previousRainFrame = 0;

  function makeRainDrop(initial = false) {
    const depth = Math.random();
    return {
      depth,
      x: Math.random() * rainWidth,
      y: initial ? Math.random() * rainHeight : -Math.random() * rainHeight * 0.24,
      length: 7 + depth * 18,
      speed: 420 + depth * 1000,
      width: 0.35 + depth * 0.9,
      opacity: 0.035 + depth * 0.12,
      slant: 0.08 + depth * 0.22,
    };
  }

  function resizeRain() {
    const bounds = rainCanvas.getBoundingClientRect();
    rainWidth = bounds.width;
    rainHeight = bounds.height;
    rainScale = Math.min(window.devicePixelRatio || 1, 1.5);
    rainCanvas.width = Math.round(rainWidth * rainScale);
    rainCanvas.height = Math.round(rainHeight * rainScale);
    rainContext.setTransform(rainScale, 0, 0, rainScale, 0, 0);
    rainContext.lineCap = "round";

    const dropCount = Math.max(70, Math.min(320, Math.round(rainWidth * 0.16)));
    rainDrops = Array.from({ length: dropCount }, () => makeRainDrop(true));
  }

  function drawRain(timestamp) {
    if (document.hidden) {
      rainFrame = 0;
      return;
    }

    const delta = previousRainFrame
      ? Math.min((timestamp - previousRainFrame) / 1000, 0.05)
      : 0.016;
    previousRainFrame = timestamp;
    rainContext.clearRect(0, 0, rainWidth, rainHeight);

    const gust = Math.sin(timestamp * 0.00012) * 42 + Math.sin(timestamp * 0.00033) * 18;
    rainDrops.forEach((drop, index) => {
      drop.x += (55 + gust + drop.depth * 90) * delta;
      drop.y += drop.speed * delta;

      if (drop.y > rainHeight + drop.length || drop.x > rainWidth + drop.length * 2) {
        rainDrops[index] = makeRainDrop(false);
        return;
      }

      rainContext.beginPath();
      rainContext.moveTo(drop.x, drop.y);
      rainContext.lineTo(drop.x + drop.length * drop.slant, drop.y + drop.length);
      rainContext.lineWidth = drop.width;
      rainContext.strokeStyle = `rgba(194, 220, 232, ${drop.opacity})`;
      rainContext.stroke();
    });

    rainFrame = window.requestAnimationFrame(drawRain);
  }

  function startRain() {
    if (!rainFrame) {
      previousRainFrame = 0;
      rainFrame = window.requestAnimationFrame(drawRain);
    }
  }

  function stopRain() {
    if (rainFrame) window.cancelAnimationFrame(rainFrame);
    rainFrame = 0;
    rainContext.clearRect(0, 0, rainWidth, rainHeight);
  }

  resizeRain();
  startRain();
  window.addEventListener("resize", resizeRain, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopRain();
    else startRain();
  });
}

const lightningBolt = document.querySelector(".hero-atmosphere__lightning");
const lightningGlow = document.querySelector(".hero-atmosphere__flash");

if (lightningBolt && lightningGlow && !reduceRoleMotion) {
  let lightningTimer = 0;

  function triggerLightning() {
    const drift = `${(Math.random() - 0.5) * 34}px`;
    const angle = `${(Math.random() - 0.5) * 7}deg`;
    const widthScale = (0.88 + Math.random() * 0.24).toFixed(2);
    lightningBolt.style.transform = `translate3d(${drift}, 0, 0) rotate(${angle}) scaleX(${widthScale})`;

    [lightningGlow, lightningBolt].forEach((layer) => {
      layer.classList.remove("is-flashing");
      void layer.getBoundingClientRect();
      layer.classList.add("is-flashing");
    });
  }

  function scheduleLightning(delay = 2800 + Math.random() * 5000) {
    window.clearTimeout(lightningTimer);
    lightningTimer = window.setTimeout(() => {
      if (!document.hidden) triggerLightning();
      scheduleLightning(7600 + Math.random() * 10800);
    }, delay);
  }

  scheduleLightning();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearTimeout(lightningTimer);
    else scheduleLightning(2200 + Math.random() * 4800);
  });
}

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

var mixer = mixitup(".portfolio-gallery");

const header = document.querySelector("header");
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  const scrollPosition = window.scrollY + header.offsetHeight + 24;
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  let len = section.length;

  if (isAtBottom) {
    len = section.length - 1;
  } else {
    while (--len && scrollPosition < section[len].offsetTop) {}
  }

  menuLi.forEach((sec) => sec.classList.remove("active"));
  if (menuLi[len]) {
    menuLi[len].classList.add("active");
  }
}
activeMenu();
window.addEventListener("scroll", activeMenu);

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show-items");
    } else {
      entery.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

window.history.pushState(null, "", window.location.href);
window.addEventListener("popstate", function (event) {
  window.history.pushState(null, "", window.location.href);
});

function toggle() {
  var video = document.querySelector(".video");
  var videos = document.querySelector("video");
  video.classList.toggle("active");

  if (video.classList.contains("active")) {
    videos.play();
  } else {
    videos.pause();
    videos.currentTime = 0;
  }
}

function closeVideoOverlay() {
  var video = document.querySelector(".video");
  var videos = document.querySelector("video");
  video.classList.remove("active");
  videos.pause();
  videos.currentTime = 0;
}

document.querySelector(".video").addEventListener("click", function (event) {
  // Check if the clicked element is the video element itself
  if (event.target.tagName.toLowerCase() === "video") {
    return;
  }

  closeVideoOverlay();
});

document
  .querySelector(".btn-box a:last-child")
  .addEventListener("click", toggle);
