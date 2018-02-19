$("#table tr td").click(function() {
  if ($(this).text()=="") {
    if (document.getElementById('turn').textContent == X) {
      $(this).append("x");
    }
    else {
      $(this).append("O");
    }
  }
});