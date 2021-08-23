(function(window) {
    var helloSpeaker = new Object();
    var firstWord = "Hello ";
    helloSpeaker.speak = function(name) {
        console.log(firstWord + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
