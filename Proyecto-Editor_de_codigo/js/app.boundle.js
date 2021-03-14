"use strict";

var text = document.querySelector('#text');
var view = document.querySelector('#view');

var upDate = function upDate() {
  view.srcdoc = text.value;
};