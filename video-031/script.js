const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click!')
// };

// btn.onclick = function() {
//     alert('click 2!')
// };

let i = 0;

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', (deleteElement) => {
//     // console.log(even.target);
//     even.target.remove();
//     // console.log('Hover');
// });

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});