'use strict';

//Модуль медиаплеера
const MediaPlayer = (function () {

    let indexSong = 0,
    resultStack = [];

    // создаем экземпляр функции аудио
    const audio = new Audio();
           
    // делаем список треков
    function listSong(event) {
        const files = event.target.files;
        let i, fileStack;

        for (i = 0; fileStack = files[i]; i++) {
            resultStack.push('/songs/' + fileStack.name);
        }
        
        return audio.src = resultStack[indexSong];
    }

    // запускаем трек
    function startPlay() {
        audio.play();
    }

    // пауза в треке
    function pausedPlay() {
        audio.pause();
        console.log(audio.src);
    }

    // останавливаем трек, переводим время воспроизвденения к началу трека
    function stopPlay() {
        audio.pause();
        audio.currentTime = 0;
    }

    // следущий трек по списку
    function nextSong() {
        if(resultStack.length > 1 && indexSong >= 0 && indexSong < resultStack.length - 1) {

            indexSong = indexSong + 1;
            audio.src = resultStack[indexSong];
            console.log(indexSong);
        }
        else {
            indexSong = 0;
            console.log(indexSong);
            audio.src = resultStack[indexSong];
        }
        audio.play();
    }

    function preSong() {
        if(resultStack.length > 1 && indexSong !== 0) {
            indexSong = indexSong - 1;
            audio.src = resultStack[indexSong];
            console.log(indexSong);
        }
        else {
            indexSong = 0;
            console.log(indexSong);
            audio.src = resultStack[indexSong];
        }
        audio.play();
    }

    // ловим события по нажатию соответсвующих кнопок
    function playSong() {
        const play = document.getElementById('play');
        play.addEventListener('click', startPlay, false);
    }

    function pauseSong() {
        const pause = document.getElementById('pause');
        pause.addEventListener('click', pausedPlay, false);
    }

    function stopSong() {
        const stop = document.getElementById('stop');
        stop.addEventListener('click', stopPlay, false);
    }
    
    function changeSong() {
        const files = document.getElementById('files');
        files.addEventListener('change', listSong, false);
    }

    function clickNext() {
        const next = document.getElementById('next');
        next.addEventListener('click', nextSong, false);
    }

    function clickPre() {
        const pre = document.getElementById('pre');
        pre.addEventListener('click', preSong, false);
    }

    return {
        playSong: playSong(),
        pauseSong: pauseSong(),
        stopSong: stopSong(),
        changeSong: changeSong(),
        clickNext: clickNext(),
        clickPre: clickPre()
    }

}());
