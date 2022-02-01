//Для Заполнения tbody json данными
const contentElement = document.getElementById('content-table');
// Здесь будут храниться данные
let data = [];


// При загрузке страницы сразу вызываем функцию initApp
document.addEventListener("DOMContentLoaded", initApp);


// Проверяем на выполнение промиса, в случае положительного респонса, полученные данные деструктурируем
// в зараннее подготовленный массив
function initApp() {
    Promise.all([getData()]).then(values => {
        [data] = values;
    })
    console.log(getData());
    data.forEach(user => {printData(user)});
}

//Basic logic

function printData({name: {firstName, lastName},  about, eyeColor}) {
    contentElement.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${about.slice(0, 150) + "..."}</td>
      <td>${eyeColor}</td>
    </tr>
    `)
}



// getData from json file
async function getData() {
    const response = await fetch("http://localhost:63342/JSONTask/data.json");
    return await response.json();
}

