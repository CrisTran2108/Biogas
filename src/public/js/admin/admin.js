// Function generate number of generator online/offline

var onlineValue = Math.floor(Math.random()*100);
var offlineValue = 100 - onlineValue;

$("#onlineValue").append(onlineValue);
$("#offlineValue").append(offlineValue);
