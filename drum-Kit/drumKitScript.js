window.addEventListener('keydown', function(e) {
    let audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) { return } ;
    audio.currentTime = 0;
    audio.play();
})