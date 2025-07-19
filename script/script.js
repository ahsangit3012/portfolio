// Fix scroll position at page load
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".see-more-btn");
  const morePhotos = document.querySelector(".more-photos");

  if (btn && morePhotos) {
    btn.addEventListener("click", () => {
      morePhotos.classList.toggle("hidden");
      btn.textContent = morePhotos.classList.contains("hidden")
        ? "+ See More"
        : "- See Less";
    });
  }
});

// See More toggle for videos
const videoToggleBtn = document.querySelector(".video-toggle");
const moreVideos = document.querySelector(".more-videos");

if (videoToggleBtn && moreVideos) {
  videoToggleBtn.addEventListener("click", () => {
    moreVideos.classList.toggle("hidden");
    videoToggleBtn.textContent = moreVideos.classList.contains("hidden")
      ? "+ See More"
      : "- See Less";
  });
}

// Video Modal
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll("#videography video").forEach((vid) => {
  vid.addEventListener("click", () => {
    modalVideo.src = vid.src;
    videoModal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  modalVideo.pause();
  modalVideo.src = "";
});
