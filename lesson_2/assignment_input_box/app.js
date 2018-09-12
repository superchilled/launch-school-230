document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');
  var cursorInterval;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    if (!cursorInterval) {
      cursorInterval = setInterval(function() {
        textField.classList.toggle('cursor');
      }, 500);
    }
  });

  document.addEventListener('keypress', function(event) {
    if (textField.classList.contains('focused')) {
      contentBox.textContent += event.key;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (textField.classList.contains('focused') && event.key === 'Backspace') {
      contentBox.textContent = contentBox.textContent.slice(0, -1);
    }
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    if (cursorInterval) {
      clearInterval(cursorInterval);
      cursorInterval = null;
    }
    textField.classList.remove('cursor');
  });
});
