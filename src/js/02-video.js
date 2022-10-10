import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});


player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
    localStorage.setItem("videoPlayer-current-time", data.seconds);
};

const currentTime = localStorage.getItem("videoPlayer-current-time");

if (currentTime){
player.setCurrentTime(currentTime);}