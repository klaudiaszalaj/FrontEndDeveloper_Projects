import { shuffle } from './shuffle.js';


const cards = ["taste7.png","taste2.png", "taste1.png", "taste8.png", "taste3.png", "taste5.png", "taste4.png", "taste3.png","taste1.png","taste7.png", "taste4.png", "taste8.png", "taste6.png", "taste2.png", "taste6.png", "taste5.png", ];

window.addEventListener('load', shuffle(cards));

for (let i=0; i<16; i++){
    let cardo;
    cardo = document.getElementById('c'+i);
    cardo.addEventListener("click", function() { revealCard(i);});
}

let oneVisible = false; 
let turnCounter = 0; 
let visibleNumber;
let lock = false;
let pairsLeft = 8;

function revealCard(nr){
    const opacityValue = $('#c'+nr).css('opacity');

    if (opacityValue != 0 && lock == false){ 

        lock = true;
        const obraz = "url(./img/"+ cards[nr] + ")";
        $('#c'+nr).css('background-image', obraz); 
        $('#c'+nr).addClass('cardA'); 

        if (oneVisible == false) {
            //first card
            oneVisible = true;
            visibleNumber = nr; 
            lock = false;

        }
        else{
            //second card
            if(cards[visibleNumber] == cards[nr]){  
                setTimeout(() => { hide2Cards(nr, visibleNumber) }, 750);
            }
            else{
                setTimeout(() => {restore2Cards(nr, visibleNumber) }, 750);
            }

            turnCounter++;
            if (turnCounter>=16){
                $('.board').html('<h1 id="congratulations" >You lose<br> <a href="./gra2.html">Try again</a></h1>');
            }
            $('.score').html('TURN COUNTER: '+turnCounter);
            oneVisible = false;

        }


    }


}

function hide2Cards(nr1, nr2){
    $('#c'+nr1).css('opacity', '0');
    $('#c'+nr2).css('opacity', '0');
    lock = false;

    pairsLeft --;

    if(pairsLeft == 0){
        $('.board').html('<h1 id="congratulations" >CONGRATS<br>You win!</h1>');
    }
}

function restore2Cards(nr1, nr2){

    $('#c'+nr1).css('background-image', 'url(./img/glownatastebw.png)'); 
    $('#c'+nr1).addClass('cardlev3');
    $('#c'+nr1).removeClass('cardlev3A');

    $('#c'+nr2).css('background-image', 'url(./img/glownatastebw.png)'); 
    $('#c'+nr2).addClass('cardlev3');
    $('#c'+nr2).removeClass('cardlev3A');

    lock = false;
}

