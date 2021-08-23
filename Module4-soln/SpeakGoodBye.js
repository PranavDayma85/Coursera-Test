(function(window) {
    var byeSpeaker = new Object();
    var firstWord = "Good Bye ";
    byeSpeaker.speak = function speak(name) {
        console.log(firstWord + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
