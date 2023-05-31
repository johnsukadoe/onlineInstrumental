//handle links
const linkButtons = document.querySelectorAll('.link');

linkButtons.forEach((link) =>{
    link.addEventListener('mouseover', addClassLink);
    link.addEventListener('mouseout', removeClassLink);
})

function addClassLink(e){
    e.target.classList.add('link-active');
}
function removeClassLink(e){
    e.target.classList.remove('link-active');
}

//handle cards

const cards = document.querySelectorAll('.card');


cards.forEach((link) =>{
    link.addEventListener('mouseover', addClassCard);
    link.addEventListener('mouseout', removeClassCard);
})