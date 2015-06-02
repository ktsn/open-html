#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var opener = require('opener');
var dir = process.argv[2];
var base = process.argv[3] || '';

if (!dir) {
  console.log('required 2nd argument.');
  return;
}

function openHtml(pathList, options, done) {
  if (pathList.length === 0) return done(null);

  var localBase = options.localBase;
  var urlBase = options.urlBase || localBase;

  var target = pathList.shift();
  var stat = fs.statSync(target);

  if (stat.isDirectory()) {
    fs.readdir(target, function(err, fileList) {
      if (err) return done(err);
      fileList = fileList.map(function(file) {
        return path.join(target, file);
      });
      openHtml(pathList.concat(fileList), options, done);
    });
    return;
  }

  if (stat.isFile() && path.extname(target) === '.html') {
    var url = path.join(urlBase, path.relative(localBase, target));
    console.log('open: ' + url);
    opener(url);
  }

  openHtml(pathList, options, done);
}

openHtml([dir], {
  localBase: dir,
  urlBase: base
}, function(err) {
  if (err) throw err;
  console.log('done.');
});
