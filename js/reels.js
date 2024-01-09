const videoIds = [
    'stjhSwcpeI0',
    'oFbl0fG4FMI',
    'mD2I1rVtXiE',
    'ueKSgiLk1yM',
    'hVUSFdLNjts',
    'zIeViiOyKzc',
    'W40Sna_NvK8',
    'BU0fqqaXWqU',
    '8KzLo0ScNtU',
    '1kx7C6N6rxU',
    'NyUaIjd8t9Y',
    'jh9J8hAdmr4',
    'SctUh5ByV5g',
    'dIZ_EzgpGsc',
    'Iu9sqSgSP5A',
    'Ngh4fsJgvb4',
    'Kq1IIBFLZWs',
    '_7HpVjVYjlo',
    'SIwqO4j0JPo',
    'mQlkfJWDa1s',
    'CCyKfdwQMLs',
    'y1mZAM9wAF4',
    'P7R_GGTOnW0',
    'FKEYLgYACgo',
    'cY-UEF74C-s',
    'rcpvZcHMqEA',
    '7znPMV8nips',
    'KY7WFahQ33w',
    'hWRrknXOP0w',
    '0RBHHnCpwp8'
    // Add more video IDs as needed
];

let currentVideoIndex = 0;
const mainContainer = document.getElementById('mainContainer');
const reelsFrame = document.getElementById('reelsFrame');
let player;
let touchStartY;


function onYouTubeIframeAPIReady() {
    createReelsFrame(videoIds[currentVideoIndex]);
}

function createReelsFrame(videoId) {
    if (player) {
        player.destroy();
    }

    const playerDiv = document.createElement('div');
    playerDiv.id = 'mainVideo';
    reelsFrame.innerHTML = ''; // Clear previous content
    reelsFrame.appendChild(playerDiv);

    player = new YT.Player('mainVideo', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: videoId
        },
        events: {
            'onReady': onPlayerReady
        }
    });

    // Create and append icons
    const reelIconsContainer = document.createElement('div');
    reelIconsContainer.className = 'ReelIcons';

    const icons = ['heart', 'comment', 'share', 'whatsapp'];
    icons.forEach(icon => {
        const iconDiv = document.createElement('div');
        const iconImg = document.createElement('img');
        iconImg.src = `svg/${icon}.svg`;  // Update the path based on your project structure
        iconImg.alt = '';
        iconDiv.appendChild(iconImg);
        reelIconsContainer.appendChild(iconDiv);
    });

    reelsFrame.appendChild(reelIconsContainer);

}

function onPlayerReady(event) {
    event.target.playVideo();
}

function loadNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    createReelsFrame(videoIds[currentVideoIndex]);
}

mainContainer.addEventListener('touchstart', handleTouchStart, false);
mainContainer.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!touchStartY) return;

    const touchEndY = event.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (deltaY > 50) {
        // Swipe up, play next video
        loadNextVideo();
    } else if (deltaY < -50) {
        // Swipe down, play previous video
        loadPreviousVideo();
    }

    touchStartY = null;
}

function loadPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
    createReelsFrame(videoIds[currentVideoIndex]);
}