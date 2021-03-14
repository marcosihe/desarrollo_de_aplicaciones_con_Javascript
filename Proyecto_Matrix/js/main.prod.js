"use strict";

var element = document.querySelector('#canvas');
var ctx = element.getContext("2d");
var _width = document.body.clientWidth;
var _height = document.body.clientHeight;
element.width = _width;
element.height = _height;
var position = Array(300).join(0).split('');
console.log(position);

var initMatrix = function initMatrix() {
  ctx.fillStyle = 'rgba(0, 15, 2, 0.15)';
  ctx.fillRect(0, 0, _width, _height);
  ctx.fillStyle = '#4caf50';
  ctx.font = '11pt';
  position.map(function (y, index) {
    //text generará los caracteres
    var text = String.fromCharCode(1e3 + Math.random() * 30); //console.log(text);

    var x = index * 15 + 15;
    canvas.getContext('2d').fillText(text, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  });
};

setInterval(initMatrix, 70);