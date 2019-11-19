function qtc_calc() {
  var qt = document.getElementById("sel_qt_calc").value;
  var rr = document.getElementById("txt_qtc_calc").value;
  var hr = rr * 0.04;
  var qtc = qt / Math.sqrt(hr);
  var hr_display, qt_display, qtc_display;

  qtc = Math.round(qtc * 1000);

  hr_display = document.getElementById("hr_cal");
  qt_display = document.getElementById("qt_cal");
  qtc_display = document.getElementById("qtc_cal");

  if (!rr) {
    hr_display.innerHTML = null;
    qt_display.innerHTML = null;
    qtc_display.innerHTML = null;
  } else {
    hr_display.innerHTML = "HR: " + Math.round(1500 / rr);
    qt_display.innerHTML = "QT: " + qt;
    qtc_display.innerHTML = "QTc: " + qtc;

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
}
