//CommonJS imported dependencies
var timeline = require('./timeline.js');
var ssssssss = require('../css/style.css');

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