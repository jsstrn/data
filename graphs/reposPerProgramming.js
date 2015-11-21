'use strict';

// get an array of numbers
// each number is the total number of events in a week

var utilsLib = require('../tasks/utils');
var moment = require('moment-timezone');
var fs = require('fs');

function getData() {
  var type = 'repos';
  var yData = [];
  var answer = [];
  var languages = [];

  utilsLib.listFilePaths(type).forEach(function(file, index) {
    var data = require('.' + file);

    data.repos.forEach(function(repo) {

      if (languages.indexOf(repo.language) < 0 && repo.language !== null) {
        answer.push({
          language: repo.language,
          n: 1
        })
        languages.push(repo.language)
      } else {
        answer.forEach(function(el) {
          if (el.language === repo.language) {
            el.n += 1;
          }
        })
      }
    })
  })

  console.log(answer);
}

getData();
