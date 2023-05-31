//handle cards

const cards = document.querySelectorAll('.card');


cards.forEach((link) =>{
    link.addEventListener('mouseover', addClassCard);
    link.addEventListener('mouseout', removeClassCard);
})


function addClassCard(e){
    e.target.classList.add('card-active');  
}
function removeClassCard(e){
    e.target.classList.remove('card-active');
}