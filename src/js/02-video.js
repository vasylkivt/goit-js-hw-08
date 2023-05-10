import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const LOCAL_STORAGE_TIME = 'video-player-current-time';

// localStorage.clear();
// localStorage.removeItem(LOCAL_STORAGE_TIME);

updateCornetTime();

player.on('timeupdate', throttle(saveCornetTime, 1000));

function saveCornetTime({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE_TIME, JSON.stringify(seconds));
}

function updateCornetTime() {
  let persistedData;

  try {
    persistedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TIME));
  } catch (error) {
    console.log(error.name);
  }

  if (persistedData) {
    player.setCurrentTime(persistedData);
  }
}
