
// Отправка get запроса на сервер по URL
function get(myUrl) {

   let xhr = new XMLHttpRequest();

   xhr.open("GET", myUrl, false); // false - Синхронный запрос
   xhr.send();

   return xhr.responseText; //строка
}

// Формирование и добавление строк таблицы
function addRows(obj) {

   let element = document.getElementById("active-content");
   element.innerHTML = ""; // Очистка таблицы

   for (let i = 0; i < obj.length; i++) {

      // Создание новой строки
      let tr = document.createElement('tr');
      tr.className = "table__row";

      // Формирование ячеек в строке
      tr.innerHTML = "<td class='table__item table__item_content'><span>" + obj[i].id +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].name +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].address +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].phone +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].birthday +
         "</span></td>";

      element.append(tr); // Добавление строки в таблицу
   }
}

// Обновление информации на странице
let timerId = setInterval(function () {
   let obj = JSON.parse(get("http://188.242.196.218:5566/profiles")); // Json - файл (объект)
   addRows(obj);
}, 500);

//https://jsonplaceholder.typicode.com/todos
//http://188.242.196.218:5566/profiles