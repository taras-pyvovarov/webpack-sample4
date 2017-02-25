//CommonJS imported dependencies
var cssPath = '../css/style.css';
require(cssPath);
var timeline = require('./timeline.js');

var user = {
  name : "Shekhar Gulati",
  messages : [
    "hello",
    "bye",
    "good night"
  ]
};

//debugger;
var timelineModule = new timeline(user);
timelineModule.setHeader(user);
timelineModule.setTimeline(user);