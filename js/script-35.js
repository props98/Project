"use strict";

const p = document.querySelectorAll('p');
console.log(p);


//! Динамически вставляем скрипт на страницу
const script = document.createElement('script');
script.src = 'js/test.js';
script.async = false;
document.body.apppend(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.apppend(script);
}

loadScript('js/test.js');
loadScript();