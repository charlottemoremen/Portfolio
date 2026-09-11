// Powers the image-then-video swipe carousel used on project pages
// (e.g. ChessPal, Pandai). Handles:
//  - tapping "swipe to view full walkthrough" to advance to the video
//  - tapping "swipe to return to still" to go back
//  - swapping which caption/hint is visible based on which slide is in
//    view, whether the person got there by tapping or an actual swipe
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.media-swipe').forEach(function (fig) {
    var track = fig.querySelector('.media-swipe-track');
    if (!track) return;

    var hintForward = fig.querySelector('.swipe-hint-forward');
    var hintBack = fig.querySelector('.swipe-hint-back');
    var captionStill = fig.querySelector('.caption-still');
    var captionVideo = fig.querySelector('.caption-video');

    function goToSlide(index) {
      track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
    }

    function updateHints() {
      var onFirstSlide = track.scrollLeft < track.clientWidth * 0.5;
      if (hintForward) hintForward.classList.toggle('is-hidden', !onFirstSlide);
      if (hintBack) hintBack.classList.toggle('is-hidden', onFirstSlide);
      if (captionStill) captionStill.classList.toggle('is-hidden', !onFirstSlide);
      if (captionVideo) captionVideo.classList.toggle('is-hidden', onFirstSlide);
    }

    if (hintForward) hintForward.addEventListener('click', function () { goToSlide(1); });
    if (hintBack) hintBack.addEventListener('click', function () { goToSlide(0); });

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateHints();
        ticking = false;
      });
    }, { passive: true });

    updateHints();
  });
});