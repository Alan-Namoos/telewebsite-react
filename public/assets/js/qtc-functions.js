function checkQTc(qtc){
  const qtc_display = document.getElementById('qtc');
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
// ********************* (40) 1st Row START***************************
function qtc_229_40() {
  let hr = 40
  let qt = 0.28
  let qtc = 229
  let hr_display = document.getElementById("hr")
  let qt_display = document.getElementById("qt")
  let qtc_display = document.getElementById("qtc")

  checkQTc(qtc)

  hr_display.innerHTML='HR: ' + hr;
  qt_display.innerHTML='QT: ' + qt;
  qtc_display.innerHTML='QTc: ' + qtc;
}

function qtc_245_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 245';
}

function qtc_261_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 261';
}

function qtc_278_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 278';
}

function qtc_294_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 294';
}

function qtc_310_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 310';
}

function qtc_327_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 327';
}

function qtc_343_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 343';
}

function qtc_359_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 359';
}

function qtc_376_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 376';
}

function qtc_392_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 392';
}

function qtc_408_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 408';
}

function qtc_425_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 425';
}

function qtc_441_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 441';
}

function qtc_457_40()
{
document.getElementById("hr").innerHTML='HR= 40';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 457';
}


// ********************* (40) 1st Row END***************************

// ********************* (45) 2nd Row START ***********************

function qtc_242_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 242';
}

function qtc_260_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 260';
}

function qtc_277_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 277';
}

function qtc_294_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 294';
}

function qtc_312_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 312';
}

function qtc_329_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 329';
}

function qtc_346_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 346';
}

function qtc_364_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 364';
}

function qtc_381_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 381';
}

function qtc_398_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.45';
document.getElementById("qtc").innerHTML='QTc= 398';
}

function qtc_416_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 416';
}

function qtc_433_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 433';
}

function qtc_450_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 450';
}

function qtc_468_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 468';
}

function qtc_485_45()
{
document.getElementById("hr").innerHTML='HR= 45';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 485';
}


// ********************* (45) 2nd Row END ***************************

// ********************* (50) 3rd Row START **************************

function qtc_256_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 256';
}

function qtc_274_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 274';
}

function qtc_292_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 292';
}

function qtc_310_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 310';
}

function qtc_329_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 329';
}

function qtc_347_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 347';
}

function qtc_365_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 365';
}

function qtc_383_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 383';
}

function qtc_402_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 402';
}

function qtc_420_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 420';
}

function qtc_438_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 438';
}

function qtc_456_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 456';
}

function qtc_475_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 475';
}

function qtc_493_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 493';
}

function qtc_511_50()
{
document.getElementById("hr").innerHTML='HR= 50';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 511';
}


// ********************* (50) 3rd Row END ***************************


// ********************* (55) 4th Row TART ***************************

function qtc_268_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 268';
}

function qtc_287_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 287';
}

function qtc_306_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 306';
}

function qtc_326_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 326';
}

function qtc_345_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 345';
}

function qtc_364_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 364';
}

function qtc_383_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 383';
}

function qtc_402_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 402';
}

function qtc_421_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 421';
}

function qtc_440_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 440';
}

function qtc_460_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 460';
}

function qtc_479_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 479';
}

function qtc_498_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 498';
}

function qtc_517_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 517';
}

function qtc_536_55()
{
document.getElementById("hr").innerHTML='HR= 55';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 536';
}



// ********************* (55) 4th Row END ***************************

// ********************* (60) 5th Row START ***************************


function qtc_280_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 280';
}

function qtc_300_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 300';
}

function qtc_320_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 320';
}

function qtc_340_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 340';
}

function qtc_360_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 360';
}

function qtc_380_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 380';
}

function qtc_400_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 400';
}

function qtc_420_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 420';
}

function qtc_440_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 440';
}

function qtc_460_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 460';
}

function qtc_480_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 480';
}

function qtc_500_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 500';
}

function qtc_520_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 520';
}

function qtc_540_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 540';
}

function qtc_560_60()
{
document.getElementById("hr").innerHTML='HR= 60';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 560';
}


// ********************* (60) 5th Row END ***************************

// ********************* (65) 5th Row START *************************** 
function qtc_291_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 291';
}

function qtc_312_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 312';
}

function qtc_333_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 333';
}

function qtc_354_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 354';
}

function qtc_375_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 375';
}

function qtc_396_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 396';
}

function qtc_416_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 416';
}

function qtc_437_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 437';
}

function qtc_458_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 458';
}

function qtc_479_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 479';
}

function qtc_500_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 500';
}

function qtc_520_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 520';
}

function qtc_541_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 541';
}

function qtc_562_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 562';
}

function qtc_583_65()
{
document.getElementById("hr").innerHTML='HR= 65';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 583';
}

// ********************* (65) 5th Row END ***************************

// ********************* (70) 5th Row START ***************************
function qtc_302_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 302';
}

function qtc_324_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 324';
}

function qtc_346_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 346';
}

function qtc_367_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 367';
}

function qtc_389_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 389';
}

function qtc_410_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 410';
}

function qtc_432_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 432';
}

function qtc_454_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 454';
}

function qtc_475_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 475';
}

function qtc_497_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 497';
}

function qtc_518_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 518';
}

function qtc_540_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 540';
}

function qtc_562_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 562';
}

function qtc_583_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 583';
}

function qtc_605_70()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 605';
}


// ********************* (70) 5th Row END ***************************

// ********************* (75) 5th Row START ***************************
function qtc_313_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 313';
}

function qtc_335_75()
{
document.getElementById("hr").innerHTML='HR= 70';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 335';
}

function qtc_358_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 358';
}

function qtc_380_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 380';
}

function qtc_402_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 402';
}

function qtc_425_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 425';
}

function qtc_447_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 447';
}

function qtc_470_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 470';
}

function qtc_492_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 492';
}

function qtc_514_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 514';
}

function qtc_537_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 537';
}

function qtc_559_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 559';
}

function qtc_581_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 581';
}

function qtc_604_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 604';
}

function qtc_626_75()
{
document.getElementById("hr").innerHTML='HR= 75';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 626';
}


// ********************* (75) 5th Row END ***************************

// ********************* (80) 5th Row START ***************************
function qtc_323_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 323';
}

function qtc_346_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 346';
}

function qtc_370_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 370';
}

function qtc_393_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 393';
}

function qtc_416_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 416';
}

function qtc_439_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 439';
}

function qtc_462_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 462';
}

function qtc_485_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 485';
}

function qtc_508_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 508';
}

function qtc_531_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 531';
}

function qtc_554_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 554';
}

function qtc_577_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 577';
}

function qtc_600_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 600';
}

function qtc_624_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 624';
}

function qtc_647_80()
{
document.getElementById("hr").innerHTML='HR= 80';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 647';
}


// ********************* (80) 5th Row END ***************************

// ********************* (85) 5th Row START ***************************
function qtc_333_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 333';
}

function qtc_357_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 357';
}

function qtc_381_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 381';
}

function qtc_405_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 405';
}

function qtc_428_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 428';
}

function qtc_452_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 452';
}

function qtc_476_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 476';
}

function qtc_500_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 500';
}

function qtc_524_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 524';
}

function qtc_548_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 548';
}

function qtc_571_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 571';
}

function qtc_595_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 595';
}

function qtc_619_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 619';
}

function qtc_643_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 643';
}

function qtc_667_85()
{
document.getElementById("hr").innerHTML='HR= 85';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 667';
}


// ********************* (85) 5th Row END ***************************

// ********************* (90) 5th Row START ***************************
function qtc_343_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 343';
}

function qtc_367_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 367';
}

function qtc_392_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 392';
}

function qtc_416_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 416';
}

function qtc_441_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 441';
}

function qtc_465_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 465';
}

function qtc_490_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 490';
}

function qtc_514_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 514';
}

function qtc_539_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 539';
}

function qtc_563_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 563';
}

function qtc_588_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 588';
}

function qtc_612_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 612';
}

function qtc_637_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 637';
}

function qtc_661_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 661';
}

function qtc_686_90()
{
document.getElementById("hr").innerHTML='HR= 90';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 686';
}


// ********************* (90) 5th Row END ***************************

// ********************* (95) 5th Row START ***************************
function qtc_352_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 352';
}

function qtc_377_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 377';
}

function qtc_403_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 403';
}

function qtc_428_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 428';
}

function qtc_453_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 453';
}

function qtc_478_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 478';
}

function qtc_503_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 503';
}

function qtc_528_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 528';
}

function qtc_554_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 554';
}

function qtc_579_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 579';
}

function qtc_604_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 604';
}

function qtc_629_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 629';
}

function qtc_654_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 654';
}

function qtc_679_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 679';
}

function qtc_705_95()
{
document.getElementById("hr").innerHTML='HR= 95';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 705';
}


// ********************* (95) 5th Row END ***************************

// ********************* (100) 5th Row START ***************************
function qtc_361_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 361';
}

function qtc_387_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 387';
}

function qtc_413_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 413';
}

function qtc_439_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 439';
}

function qtc_465_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 465';
}

function qtc_491_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 491';
}

function qtc_516_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 516';
}

function qtc_542_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 542';
}

function qtc_568_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 568';
}

function qtc_594_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 594';
}

function qtc_620_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 620';
}

function qtc_645_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 645';
}

function qtc_671_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 671';
}

function qtc_697_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 697';
}

function qtc_723_100()
{
document.getElementById("hr").innerHTML='HR= 100';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 723';
}


// ********************* (100) 5th Row END ***************************

// ********************* (105) 5th Row START ***************************
function qtc_370_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 370';
}

function qtc_397_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 397';
}

function qtc_423_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 423';
}

function qtc_450_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 450';
}

function qtc_476_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 476';
}

function qtc_503_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 503';
}

function qtc_529_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 529';
}

function qtc_556_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 556';
}

function qtc_582_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 582';
}

function qtc_609_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 609';
}

function qtc_635_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 635';
}

function qtc_661_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 661';
}

function qtc_688_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 688';
}

function qtc_714_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 714';
}

function qtc_741_105()
{
document.getElementById("hr").innerHTML='HR= 105';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 741';
}


// ********************* (105) 5th Row END ***************************

// ********************* (110) 5th Row START ***************************
function qtc_379_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 379';
}

function qtc_406_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 406';
}

function qtc_433_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 433';
}

function qtc_460_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 460';
}

function qtc_487_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 487';
}

function qtc_515_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 515';
}

function qtc_542_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 542';
}

function qtc_569_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 569';
}

function qtc_596_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 596';
}

function qtc_623_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 623';
}

function qtc_650_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 650';
}

function qtc_677_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 677';
}

function qtc_704_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 704';
}

function qtc_731_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 731';
}

function qtc_758_110()
{
document.getElementById("hr").innerHTML='HR= 110';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 758';
}


// ********************* (110) 5th Row END ***************************

// ********************* (115) 5th Row START ***************************
function qtc_388_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 388';
}

function qtc_415_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 415';
}

function qtc_443_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 443';
}

function qtc_471_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 471';
}

function qtc_498_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 498';
}

function qtc_526_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 526';
}

function qtc_554_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 554';
}

function qtc_581_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 581';
}

function qtc_609_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 609';
}

function qtc_637_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 637';
}

function qtc_665_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 665';
}

function qtc_692_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 692';
}

function qtc_720_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 720';
}

function qtc_748_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 748';
}

function qtc_775_115()
{
document.getElementById("hr").innerHTML='HR= 115';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 775';
}


// ********************* (115) 5th Row END ***************************

// ********************* (120) 5th Row START ***************************
function qtc_396_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 396';
}

function qtc_424_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 424';
}

function qtc_453_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 453';
}

function qtc_481_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 481';
}

function qtc_509_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 509';
}

function qtc_537_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 537';
}

function qtc_566_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 566';
}

function qtc_594_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 594';
}

function qtc_622_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 622';
}

function qtc_651_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 651';
}

function qtc_679_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 679';
}

function qtc_707_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 707';
}

function qtc_735_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 735';
}

function qtc_764_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc=764 ';
}

function qtc_792_120()
{
document.getElementById("hr").innerHTML='HR= 120';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 792';
}


// ********************* (120) 5th Row END ***************************

// ********************* (125) 5th Row START ***************************
function qtc_404_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 404';
}

function qtc_433_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 433';
}

function qtc_462_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 462';
}

function qtc_491_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 491';
}

function qtc_520_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 520';
}

function qtc_548_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 548';
}

function qtc_577_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 577';
}

function qtc_606_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 606';
}

function qtc_635_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 635';
}

function qtc_664_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 664';
}

function qtc_693_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 693';
}

function qtc_722_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 722';
}

function qtc_751_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 751';
}

function qtc_779_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 779';
}

function qtc_808_125()
{
document.getElementById("hr").innerHTML='HR= 125';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 808';
}


// ********************* (125) 5th Row END ***************************

// ********************* (130) 5th Row START ***************************
function qtc_412_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 412';
}

function qtc_442_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 442';
}

function qtc_471_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 471';
}

function qtc_500_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 500';
}

function qtc_530_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 530';
}

function qtc_559_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 559';
}

function qtc_589_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 589';
}

function qtc_618_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 618';
}

function qtc_648_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 648';
}

function qtc_677_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 677';
}
function qtc_707_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 707';
}

function qtc_736_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 736';
}

function qtc_765_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 765';
}

function qtc_795_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 795';
}

function qtc_824_130()
{
document.getElementById("hr").innerHTML='HR= 130';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 824';
}


// ********************* (130) 5th Row END ***************************

// ********************* (135) 5th Row START ***************************
function qtc_420_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 420';
}

function qtc_450_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 450';
}

function qtc_480_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 480';
}

function qtc_510_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 510';
}

function qtc_540_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 540';
}

function qtc_570_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 570';
}

function qtc_600_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 600';
}

function qtc_630_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 630';
}

function qtc_660_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 660';
}

function qtc_690_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 690';
}

function qtc_720_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 720';
}

function qtc_750_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 750';
}

function qtc_780_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 780';
}

function qtc_810_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 810';
}

function qtc_840_135()
{
document.getElementById("hr").innerHTML='HR= 135';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 840';
}


// ********************* (135) 5th Row END ***************************

// ********************* (140) 5th Row START ***************************
function qtc_428_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 428';
}

function qtc_458_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 458';
}

function qtc_489_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 489';
}

function qtc_519_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 519';
}

function qtc_550_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 550';
}

function qtc_580_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 580';
}

function qtc_611_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 611';
}

function qtc_642_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 642';
}

function qtc_672_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 672';
}

function qtc_703_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 703';
}

function qtc_733_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 733';
}

function qtc_764_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 764';
}

function qtc_794_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 794';
}

function qtc_825_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 825';
}

function qtc_855_140()
{
document.getElementById("hr").innerHTML='HR= 140';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 855';
}


// ********************* (140) 5th Row END ***************************

// ********************* (145) 5th Row START ***************************
function qtc_435_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 435';
}

function qtc_466_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 466';
}

function qtc_497_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 497';
}

function qtc_529_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 529';
}

function qtc_560_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 560';
}

function qtc_591_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 591';
}

function qtc_622_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 622';
}

function qtc_653_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 653';
}

function qtc_684_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 684';
}

function qtc_715_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 715';
}

function qtc_746_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 746';
}

function qtc_777_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 777';
}

function qtc_808_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 808';
}

function qtc_839_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 839';
}

function qtc_871_145()
{
document.getElementById("hr").innerHTML='HR= 145';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 871';
}


// ********************* (145) 5th Row END ***************************

// ********************* (150) 5th Row START ***************************
function qtc_443_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.28';
document.getElementById("qtc").innerHTML='QTc= 443';
}

function qtc_474_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.30';
document.getElementById("qtc").innerHTML='QTc= 474';
}

function qtc_506_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.32';
document.getElementById("qtc").innerHTML='QTc= 506';
}

function qtc_538_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.34';
document.getElementById("qtc").innerHTML='QTc= 538';
}

function qtc_569_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.36';
document.getElementById("qtc").innerHTML='QTc= 569';
}

function qtc_601_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.38';
document.getElementById("qtc").innerHTML='QTc= 601';
}

function qtc_632_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.40';
document.getElementById("qtc").innerHTML='QTc= 632';
}

function qtc_664_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.42';
document.getElementById("qtc").innerHTML='QTc= 664';
}

function qtc_696_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.44';
document.getElementById("qtc").innerHTML='QTc= 696';
}

function qtc_727_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.46';
document.getElementById("qtc").innerHTML='QTc= 727';
}

function qtc_759_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.48';
document.getElementById("qtc").innerHTML='QTc= 759';
}

function qtc_791_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.50';
document.getElementById("qtc").innerHTML='QTc= 791';
}

function qtc_822_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.52';
document.getElementById("qtc").innerHTML='QTc= 822';
}

function qtc_854_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.54';
document.getElementById("qtc").innerHTML='QTc= 854';
}

function qtc_885_150()
{
document.getElementById("hr").innerHTML='HR= 150';
document.getElementById("qt").innerHTML='QT= 0.56';
document.getElementById("qtc").innerHTML='QTc= 885';
}

// ********************* (150) 5th Row END ***************************



