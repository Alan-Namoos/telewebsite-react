function checkQtc(hr, qt, qtc){


  let hr_display = document.getElementById("hr")
  let qt_display = document.getElementById("qt")
  let qtc_display = document.getElementById("qtc")

  hr_display.innerHTML='HR: ' + hr;
  qt_display.innerHTML='QT: ' + qt;
  qtc_display.innerHTML='QTc: ' + qtc;

  if (qtc > 499) {
    qtc_display.classList.add("qtc-calc-red");
    qtc_display.classList.remove("qtc-calc-yellow");
    qtc_display.classList.remove("qtc-calc-green");
  } 
  
  if (qtc > 449 && qtc < 500) {
    qtc_display.classList.add("qtc-calc-yellow");
    qtc_display.classList.remove("qtc-calc-red");
    qtc_display.classList.remove("qtc-calc-green");
  } 

  if (qtc > 1 && qtc < 450) {
    qtc_display.classList.add("qtc-calc-green");
    qtc_display.classList.remove("qtc-calc-yellow");
    qtc_display.classList.remove("qtc-calc-red");
  } 

}