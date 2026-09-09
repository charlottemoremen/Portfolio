// Powers the image-then-video swipe carousel used on project pages
// (e.g. ChessPal, Pandai). Handles:
//  - tapping the right arrow / "swipe to view" hint to advance to the video
//  - tapping the left arrow to go back to the still image
//  - swapping which arrow is visible based on which slide is in view,
//    whether the person got there by tapping or by an actual swipe
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.media-swipe').forEach(function (fig) {
    var track = fig.querySelector('.media-swipe-track');
    if (!track) return;

    var rightBtn = fig.querySelector('.swipe-affordance-right');
    var leftBtn = fig.querySelector('.swipe-affordance-left');
    var hint = fig.querySelector('.swipe-hint');
    var captionStill = fig.querySelector('.caption-still');
    var captionVideo = fig.querySelector('.caption-video');

    function goToSlide(index) {
      track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
    }

    function updateArrows() {
      var onFirstSlide = track.scrollLeft < track.clientWidth * 0.5;
      if (rightBtn) rightBtn.classList.toggle('is-hidden', !onFirstSlide);
      if (hint) hint.classList.toggle('is-hidden', !onFirstSlide);
      if (leftBtn) leftBtn.classList.toggle('is-hidden', onFirstSlide);
      if (captionStill) captionStill.classList.toggle('is-hidden', !onFirstSlide);
      if (captionVideo) captionVideo.classList.toggle('is-hidden', onFirstSlide);
    }

    if (rightBtn) rightBtn.addEventListener('click', function () { goToSlide(1); });
    if (hint) hint.addEventListener('click', function () { goToSlide(1); });
    if (leftBtn) leftBtn.addEventListener('click', function () { goToSlide(0); });

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateArrows();
        ticking = false;
      });
    }, { passive: true });

    updateArrows();
  });
});
