function get(myUrl) {

   let xhr = new XMLHttpRequest();

   xhr.open("GET", myUrl, false);
   xhr.send();

   return xhr.responseText;
}

//let obj = JSON.parse(get("https://jsonplaceholder.typicode.com/todos"));
// http:/188.242.196.218:5566/profiles

function addRows(obj) {

   let element = document.getElementById("active-content");
   element.innerHTML = "";

   for (let i = 0; i < obj.length; i++) {

      let tr = document.createElement('tr');
      tr.className = "table__row";

      tr.innerHTML = "<td class='table__item table__item_content'><span>" + obj[i].userId +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].id +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].title +
         "</span></td><td class='table__item table__item_content'><span>" + obj[i].completed +
         "</span></td>";

      element.append(tr);
   }
}

//addRows();

let timerId = setInterval(function () {
   let obj = JSON.parse(get("https://jsonplaceholder.typicode.com/todos"));
   addRows(obj);
}, 500);