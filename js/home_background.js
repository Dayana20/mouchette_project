function random_c(){
    var color = 'pictures/';
    var letters = ['Background.png','home_background.jpg','Mouchette.jpg'];
    color+=letters[Math.floor(Math.random()*letters.length)];
    document.body.style.backgroundImage="url("+color+")";
}
