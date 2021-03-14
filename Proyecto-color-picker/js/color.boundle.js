"use strict";

var color = document.querySelector('#color');
var salida = document.querySelector('#salida');
color.addEventListener('input', function () {
  var value = color.value;

  var asignarValue = function asignarValue(colorValue) {
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = colorValue;
  };

  if (value == '#ffffff') {
    asignarValue('#000000');
  } else {
    asignarValue('#ffffff');
  }
});