var Autocomplete = {
  wrapInput: function() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },

  createUI: function() {
    var listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    var overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = this.input.clientWidth + 'px';

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  },

  bindEvents: function() {
    this.input.addEventListener('input', this.valueChanged.bind(this));
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
  },

  handleKeydown: function(event) {
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
          if (this.bestMatchIndex !== null) {
            this.input.value = this.matches[this.bestMatchIndex].name;
            event.preventDefault();
          }
          this.reset();
          break;
      case 'Enter':
        this.reset();
        break;

      case 'Escape': // escape
        this.input.value = this.previousValue;
        this.reset();
        break;
    }
  },

  valueChanged: function() {
    var value = this.input.value;
    this.previousValue = value;

    if (value.length > 0) {
      this.fetchMatches(value, function(matches) {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      }.bind(this));
    } else {
      this.reset();
    }
  },

  fetchMatches: function(query, callback) {
    var request = new XMLHttpRequest();

    request.addEventListener('load', function() {
      callback(request.response);
    }.bind(this));

    request.open('GET', this.url + encodeURIComponent(query));
    request.responseType = 'json';
    request.send();
  },

  draw: function() {
    var child;
    while (child = this.listUI.lastChild) {
      this.listUI.removeChild(child);
    }

    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    if (this.bestMatchIndex !== null) {
      var selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = selected.name;
    } else {
      this.overlay.textContent = '';
    }

    this.matches.forEach(function(match, index) {
      var li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');

      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }

      li.textContent = match.name;
      this.listUI.appendChild(li);
    }.bind(this));
  },

  reset: function(query, callback) {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;

    this.draw();
  },

  init: function() {
    this.input = document.querySelector('input');
    this.url = '/countries?matching=';

    this.listUI = null;
    this.overlay = null;
    this.visible = false;
    this.matches = [];

    this.wrapInput();
    this.createUI();
    this.bindEvents();

    this.reset();
  },
};

document.addEventListener('DOMContentLoaded', function() {
  Autocomplete.init();
});
