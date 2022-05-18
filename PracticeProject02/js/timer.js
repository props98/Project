window.addEventListener('DOMContentLoaded', () => {
   
    //? Дата в виде строки
    const deadline = '2022-05-20';

    //? функция принимает и получает разницу
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    //? добавление 0 для одинарных цифр
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

     //? Установка часов
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        //? Обнавление часов
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days); 
            hours.textContent = getZero(t.hours); 
            minutes.textContent = getZero(t.minutes); 
            seconds.textContent = getZero(t.seconds); 

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);

});