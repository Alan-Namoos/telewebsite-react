function calc_hr() {
  var display;
  var hr;
  var txt_r_r;

  txt_r_r = document.getElementById("txt_r_r");
  display_hr = document.getElementById("display_hr");

  if (
    txt_r_r.value == " " ||
    txt_r_r.value == "" ||
    txt_r_r.value < 5 ||
    txt_r_r.value > 75
  ) {
    display_hr.innerHTML = "Enter values between 5 & 75";
  } else {
    hr = Math.floor(1500 / txt_r_r.value);

    display_hr.innerHTML = "HR: " + hr + " BPM";
  }
}
