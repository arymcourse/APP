function toggleFullscrenn() {
    var element = document.getElementById('fullscreenElement');

    if (document.fullscreenElement) {
        document.exitFullscreen();
        element.style.background = 'black';
        element.style.color = 'white';
    } else {
        element.requestFullscreen().catch((err) => {
            console.error('Error attempting to enable fullscreen:', err);
    });
    element.style.background = 'white';
    element.style.color = 'black';   
             
}
}