//? touchstart - касание экрана
//? touchmove - смещение пальца
//? touchend - потравание пальца от экрана
//? touchenter -
//? touchleave - 
//? touchcancel - точка не регистрируется

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Hello');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });

});

//? touches - список всех пальцев которые заимодействуют с экраном
//? targetTouches - 
//? changedTouches