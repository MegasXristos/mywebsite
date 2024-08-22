// script.js
/*
'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    // Restart the typing effect after 8 seconds (8000 ms)
    setInterval(() => {
        el.innerHTML = '';
        typeWriter(el);
    }, 8000 + textArray.length * 95); // Adjust interval duration to match typing speed
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const elementEl = document.getElementById('elementEl');
    typeWriter(elementEl);
});

*/

'use strict';

function typeWriter(el) {
    const textArray = el.getAttribute('data-text').split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 200 * i)
    );
    // Restart the typing effect after 8 seconds (8000 ms) but keep the text visible
    setTimeout(() => {
        el.innerHTML = ''; // Clear the element's content
        typeWriter(el); // Restart the typing effect
    }, 8000 + textArray.length * 95); // Adjust interval duration to match typing speed
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const elementEl = document.getElementById('elementEl');
    // Store the text in a data attribute to preserve it
    elementEl.setAttribute('data-text', elementEl.innerHTML);
    typeWriter(elementEl);
});


'use strict';

function typeWriter(el) {
    const textArray = el.getAttribute('data-text').split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 200 * i)
    );
    // Restart the typing effect after 8 seconds (8000 ms) but keep the text visible
    setTimeout(() => {
        el.innerHTML = ''; // Clear the element's content
        typeWriter(el); // Restart the typing effect
    }, 8000 + textArray.length * 95); // Adjust interval duration to match typing speed
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const elementEl = document.getElementById('elementEl_1');
    // Store the text in a data attribute to preserve it
    elementEl.setAttribute('data-text', elementEl.innerHTML);
    typeWriter(elementEl);
});