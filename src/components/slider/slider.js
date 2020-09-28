let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 220
    //console.log('left')
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 220
    //console.log('right')
})