document.addEventListener('DOMContentLoaded', function (event) {
  var typeText = ['web applications.', 'user interfaces.', 'landing pages.'];

  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector('span').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the typeText array
  function StartTextAnimation(i) {
    if (typeof typeText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if typeText[i] exists
    if (i < typeText[i].length) {
      // text exists! start typewriter animation
      typeWriter(typeText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});