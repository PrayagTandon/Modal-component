'use strict';

const modalBox = document.querySelector('.modal-box');
const btnClose = document.querySelector('.btn-close');
const overlay = document.querySelector('.section-overlay');
const modalWindow = document.querySelectorAll('.modal-window');

// FUNCTION
const modalToggle = function () {
    modalBox.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

for (let i = 0; i < modalWindow.length; i++) {
    modalWindow[i].addEventListener('click', modalToggle)
}

btnClose.addEventListener('click', modalToggle);
overlay.addEventListener('click', modalToggle);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalBox.classList.contains('hidden')) {
        modalToggle();
    }
})