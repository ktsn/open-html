#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var opener = require('opener');
var dir = process.argv[2];

if (!dir) {
  console.log('required 2nd argument.');
  return;
}

function openHtml(pathList, done) {
  var target = pathList.shift();
  var stat = fs.statSync(target);

  if (stat.isDirectory()) {
    return fs.readdir(target, function(err, fileList) {
      if (err) return done(err);
      fileList = fileList.map(function(file) {
        return path.join(target, file);
      });
      openHtml(pathList.concat(fileList), done);
    });
  }

  if (stat.isFile()) {
    if (path.extname(target) === '.html') {
      console.log('open: ' + target);
      opener(target);
    }

    if (pathList.length > 0) {
      openHtml(pathList, done);
    } else {
      done(null);
    }
  }
}

openHtml([dir], function(err) {
  if (err) throw err;
  console.log('done.');
});
