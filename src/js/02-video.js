import Player from '@vimeo/player';
import throttle from "lodash.throttle";


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const STORAGE_KEY = 'player-current-time';
    const currentPlayerTime = localStorage.getItem(STORAGE_KEY);



    function onPlay({seconds}) {
        localStorage.setItem(STORAGE_KEY, seconds)
    };

    
    player.on('timeupdate', throttle(onPlay, 1000));
    if (currentPlayerTime) {
        player.setCurrentTime(currentPlayerTime);
    }



