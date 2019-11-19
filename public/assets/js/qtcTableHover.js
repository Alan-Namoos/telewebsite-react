function qtcTableHover() {
  if (/firefox/.test(window.navigator.userAgent.toLowerCase())) {
    var tds = document.getElementsByTagName("td");

    for (var index = 0; index < tds.length; index++) {
      tds[index].innerHTML =
        '<div class="ff-fix">' + tds[index].innerHTML + "</div>";
    }

    var style =
      "<style>" +
      "table{}" +
      "td { padding: 0 !important; }" +
      "td:hover::before, td:hover::after { background-color: transparent !important; }" +
      "</style>";
    document.head.insertAdjacentHTML("beforeEnd", style);
  }
}
