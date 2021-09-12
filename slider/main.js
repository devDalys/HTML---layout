const pics_note = document.querySelectorAll('.slider-mini');
let pics = Array.prototype.slice.call(pics_note);
let activePic = document.querySelector('.slider-active')
activePic.src = pics[1].src
const findActivePic = (event) => {
    activePic = document.querySelector('.slider-active')
    for (let i = 0; i < pics.length; i++) {
        if (pics[i].src == activePic.src) {
            swipeRigth(i);
            break;
        }
        else {
        }
    }
}
const visibleMini =(i)=>{
    pics_note[i-2].classList.add('visible');
    pics_note[i-1].classList.add('visible');
    pics_note[i].classList.add('visible');
}
const swipeMiniRigth = () => {
    for (let i = 0; i < pics_note.length-1;i++){
        const temp = pics_note[i].src;
        pics_note[i].src = pics_note[i+1].src;
        pics_note[i+1].src = temp;
    }
}
const swipeMiniLeft=()=>{
    for (let i = pics_note.length-1; i != 0 ;i--){
        const temp = pics_note[i].src;
        pics_note[i].src = pics_note[i-1].src;
        pics_note[i-1].src = temp;
    }        
}
const left_btn = document.querySelector('.left')
const rigth_btn = document.querySelector('.right')
const arrow = document.querySelectorAll('.arrow');
const swipeRigth = (i) => {
    if (i == pics.length - 1 && event.target.classList.contains('right')) {
        i = 0;
        activePic.src = pics[i].src;
        swipeMiniRigth();
        visibleMini(i)


    }
    else if (i !== pics.length - 1 && event.target.classList.contains('right')) {
        i += 1;
        activePic.src = pics[i].src;
        swipeMiniRigth();
        visibleMini(i)


       
    }
    if (i == 0 && event.target.classList.contains('left')) {
        i = 2;
        activePic.src = pics[i].src;
        swipeMiniLeft();


    }
    else if (i !== 0 && event.target.classList.contains('left')) {
        i -= 1;
        activePic.src = pics[i].src
        swipeMiniLeft();
    }
}
arrow.forEach(item => item.addEventListener('click', findActivePic))

