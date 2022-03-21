// grab our elements

const playerEl = document.querySelector('.player');
const videoEl = playerEl.querySelector('.video');
const progressEl = playerEl.querySelector('.progress');
const progressBarEl = playerEl.querySelector('.progress-filled');
const buttonsEl = playerEl.querySelector('.player-button');
const skipButtonsEl = playerEl.querySelectorAll('.data-skip');
const rangesEl = playerEl.querySelectorAll('.slider');


//future implementation to make the video fully functional 

function toggleProgress() {
const playMethod = videoEl.paused ? 'play' : 'paused';
videoEl[playMethod]()

}

function updateButton() {
    const icon = this.pause ?  '►' : '❚ ❚';
    buttonsEl.textContent = icon;
}


videoEl.addEventListener('click', toggleProgress);
videoEl.addEventListener('click', updateButton);


buttonsEl.addEventListener('click', toggleProgress);