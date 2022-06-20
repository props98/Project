"use strict";

//* Ассинхроное выполнение задач на странице и общение с сервером AJAX

//* Получаем элементы со страницы
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //* Применяем метод open c аргументами
    //* request.open( method, url, async, login, pass );
    //* Настройка запроса 
    request.open('GET', 'js/current.json');

    //* Заголовок для передачи JSON -> тип контента -> какой тип -> кодировка
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //* Запускаем запрос в зависимости от типа запроса
    request.send();

    request.addEventListener('load', () => {
        //* Делаем проверку на статус
        if (request.status === 200) {
            //* Обращаемся на сервер получаем формат JSON
            console.log(request.response);
            //* Изменяем JSON 
            const data = JSON.parse(request.response);
            console.log(data);
            //* Идет подсчет конвертации и сокращение дробных чисел до двух знаков после точки
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            //* Выдает сообщение об ошибке
            inputUsd.value = 'Somethig wrong';
        }
    });

    //* Свойства объекта XMLHttpRequest()
    // status - 404
    // statusText - Текстовое описание
    // response - Ответ от сервера
    // readyState - текущее состояние запроса 5 вариантов от 0 до 5
        // 0 - UNSENT	Client has been created. open() not called yet.
        // 1 - OPENED	open() has been called.
        // 2 - HEADERS_RECEIVED	send() has been called, and headers and status are available.
        // 3 - LOADING	Downloading; responseText holds partial data.
        // 4 - DONE	The operation is complete.

});