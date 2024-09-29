
let body = document.querySelector('body');
let fingerprint = document.querySelector('.fingerprint');
ccess,2000)
}

function onTouchEnd() {
    fingerprint.classList.remove('active')
    clearTimeout(timer)
}

body.addEventListener('mousedown', onTouchstart)
body.addEventListener('touchstart', onTouchstart)
body.addEventListener('mouseup', onTouchEnd)
body.addEventListener('touchend', onTouchEnd)
