//добавляю событие на весь сайт, если нажата  любая клавиша(keydown) то срабатывает функция
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //получаю то аудио у которого data-key равно на нажатую клавишу(метод keyCode) 
    const key = document.querySelector(`.white-key[data-key="${e.keyCode}"]`);//получаю ту клавишу у которого data-key ровно на нажатую клавишу(метод keyCode), чтобы в дальнейшем анимировать

    if(!audio) return; //если нажатая клавиша не равно data-key из audio, то заканчивай функцию

    audio.currentTime = 0; //метод currentTime удаляет задержку(звук обычно 1 секунда, метод делает его 0с чтобы быстро воспроизвести)
    audio.play();//запускает музыку

    key.classList.add('active'); //добавляет класс active на клавишу (добавление анимаций)
    
})

//функция которая удаляет анимацию после срабатывания
function removeTransition(e){
    if(e.propertyName !== 'background-color') return; //если выбранный текущий элемент не равно элементу white-key c стилем background-color то заканчивай функцию
    this.classList.remove('active'); //удаляет класс active в текущем элемента(а именно клавиша span)
}

const whiteKeys = document.querySelectorAll('.white-key'); //получаю все элементы с классом white-key
whiteKeys.forEach(key => key.addEventListener('transitionend', removeTransition)); // для всех элементов запускаю событие(метод forEach), событие transitionend - это когда анимация заканчивается