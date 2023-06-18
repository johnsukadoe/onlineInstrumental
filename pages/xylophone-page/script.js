window.addEventListener('DOMContentLoaded', addMusicContent);

const firstMusic = document.querySelector("#firstMusic");

function addMusicContent(){
    this.window.setTimeout(function(){
        firstMusic.currentTime = 0; 
        firstMusic.play();

    }, 1000);

    
}


window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.notes[data-key="${e.keyCode}"]`);

    if(!audio) return; 

    

    audio.currentTime = 0; 
    audio.play();
    key.classList.add('active'); 
    this.window.setTimeout(function(){
        key.classList.remove('active'); 
    }, 500);
})





const linkToMain = document.querySelector(".linkToMain");
linkToMain.addEventListener("mouseover", handleLink);
linkToMain.addEventListener("mouseout", removeLink);


function handleLink(){
    linkToMain.classList.add("linkToMain-active");
}
function removeLink(){
    linkToMain.classList.remove("linkToMain-active");
}