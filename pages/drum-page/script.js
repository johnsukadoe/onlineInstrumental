
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.white-key[data-key="${e.keyCode}"]`);

    if(!audio) return; 

    audio.currentTime = 0; 
    audio.play();

    
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