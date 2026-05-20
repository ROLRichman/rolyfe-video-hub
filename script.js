// RO'Lyfe Video Hub Script

console.log("RO'Lyfe Video Hub Loaded");

// Welcome Message
window.addEventListener("load", () => {

  setTimeout(() => {

    alert("🔥 Welcome to RO'Lyfe Video Hub — Watch • Learn • Execute");

  }, 1200);

});

// Smooth Scroll Buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

  });

});

// Future AI Placeholder
function openAIHub() {

  alert("🧠 Jamal AI Coming Soon");

}

// Future Video Counter
let totalVideos = 0;

function updateVideoCount() {

  console.log("Videos Loaded:", totalVideos);

}

updateVideoCount();
