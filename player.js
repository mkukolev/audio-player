
(function () {
    var AudioPlayer = {},
        audio,
        playBtn,
        pauseBtn,
        stopBtn,
        nextBtn,
        preBtn,
        listSong;

    var index = 0,
        resultStack = [];

    function init() {
        audio = new Audio();

        playBtn = document.getElementById('play');
        pauseBtn = document.getElementById('pause');
        stopBtn = document.getElementById('stop');
        nextBtn = document.getElementById('next');
        preBtn = document.getElementById('pre');
        listSong = document.getElementById('files');

        playBtn.addEventListener('click', playSong, false);
        pauseBtn.addEventListener('click', pauseSong, false);
        stopBtn.addEventListener('click', stopSong, false);
        nextBtn.addEventListener('click', nextSong, false);
        preBtn.addEventListener('click', preSong, false);
        listSong.addEventListener('change', getList, false);

        audio.addEventListener('ended', nextSong, false);
    }

    function playSong() {
        audio.play();
    }

    function pauseSong() {
        audio.pause();
    }

    function stopSong() {
        audio.pause();
        audio.currentTime = 0
    }

    function nextSong() {
        if(resultStack.length > 1 && index >= 0 && index < resultStack.length - 1) {
            index = index + 1;
        }
        else {
            index = 0;
        }
        audio.src = resultStack[index];
        playSong();
    }

    function preSong() {
        if(resultStack.length > 1 && index >= 0 && index !== 0) {
            index = index - 1;
        }
        else {
            index = 0;
        }
        audio.src = resultStack[index];
        playSong();
    }

    function getList(event) {
        let files = event.target.files,
            i,
            fileStack;

        for (i = 0; fileStack = files[i]; i++) {

            resultStack.push('./songs/' + fileStack.name);
        }

        return audio.src = resultStack[index];
    }

    AudioPlayer.init = init;

    window.AudioPlayer = AudioPlayer;
    window.onload = function () {
        init();
    }

})();