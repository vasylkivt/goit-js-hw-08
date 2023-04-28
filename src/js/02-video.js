import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const LOCAL_STORAGE_TIME = 'video-player-current-time';

// localStorage.clear();
// localStorage.removeItem(LOCAL_STORAGE_TIME);

updateCornetTime();

player.on('timeupdate', throttle(saveCornetTime, 1000));

function saveCornetTime(data) {
  localStorage.setItem(LOCAL_STORAGE_TIME, data.seconds);
}

function updateCornetTime() {
  player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_TIME) || 0);
}
