!(function (e) {
  var n = new Date("Dec 31, 2022 12:59:59").getTime(),
    t = setInterval(function () {
      var e = new Date().getTime(),
        r = n - e,
        o = Math.floor(r / 864e5),
        c = Math.floor((r % 864e5) / 36e5),
        u = Math.floor((r % 36e5) / 6e4),
        a = Math.floor((r % 6e4) / 1e3);
      (document.querySelector(".seconds").innerHTML = a + ""),
        (document.querySelector(".minutes").innerHTML = u + " :"),
        (document.querySelector(".hours").innerHTML = c + " :"),
        (document.querySelector(".days").innerHTML = o + " :"),
        0 > r &&
          (clearInterval(t),
          (document.getElementById("demo").innerHTML = "EXPIRED"));
    }, 1e3);
})(jQuery);
