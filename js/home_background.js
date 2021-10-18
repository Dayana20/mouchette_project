function random_c(){
    var color = 'pictures/';
    var letters = ['fly_background.jpg','home_background.jpg','mouchette_background.jpg'];
    color+=letters[Math.floor(Math.random()*letters.length)];
    document.body.style.backgroundImage="url("+color+")";
}
