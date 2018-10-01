var monthToBirthstone = {
  january: "garnet",
  february: "amethyst",
  march: "aquamarine or bloodstone",
  april: "diamond",
  may: "emerald",
  june: "pearl, moonstone, or alexandrite",
  july: "ruby",
  august: "peridot",
  september: "sapphire",
  october: "opal or tourmaline",
  november: "topaz or citrine",
  december: "turquoise, zircon, or tanzanite",
};

$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('visible');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('visible');
  });

  $('main').on('click', function(e) {
    $target = $(e.target);
    if ((e.target.nodeName === 'A' && $target.hasClass('button'))
    || e.target.nodeName === 'BUTTON') {
      e.preventDefault();

      $target.addClass("clicked");
    } else if ($target.hasClass('toggle')) {
      e.preventDefault();

      $target.next(".accordion").toggleClass('opened');
    }
  });

  function luhnAlgoTotal(numberString) {
    numberArray = numberString.split('').reverse();
    return numberArray.map(str => Number(str)).reduce(function(total, num, idx) {
      if(idx % 2 === 0) {
        return total + num;
      } else {
        if (num * 2 > 9) {
          return total + (((num * 2) % 10) + 1);
        } else {
          return total + (num * 2);
        }
      }
    });
  };

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var valid = false;
    if (cc_number.length > 0) {
      var luhntotal = luhnAlgoTotal(cc_number);
      var valid = luhntotal % 10 === 0;
    }
      $(this).find(".success").toggle(valid);
      $(this).find(".error").toggle(!valid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text().toLowerCase(),
        $stone = $("#birthstone");

    $stone.text('Your birthstone is ' + monthToBirthstone[month]);
  });
});
