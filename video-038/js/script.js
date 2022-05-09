"use strirct"

window.addEventListener('DOMContentLoaded', () => {
    
    //! нходим вкладки на которые мы будем кликать
    const tabs = document.querySelectorAll('.tabheader__item');
    //! находим контент вкладки
    const tabsContent = document.querySelectorAll('.tabcontent');
    //! находим рабителя всех вкладок
    const tabsParent = document.querySelector('.tabheader__items');


    //! Функция которая прячет весь не нужный контент
    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    //! Функция которая показывает выбраный контент
    function showTabsContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    //! Создаем обработчик событий, делегирование от родителя табов
    tabsParent.addEventListener('click', (evt) => {
        const target = evt.target;
        console.log(evt);

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    console.log(target);
                    hideTabsContent();
                    showTabsContent(i);
                };
            });
        };
    });

});