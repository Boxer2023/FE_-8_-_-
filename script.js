// Задача 1.
// _______________________________________________________________________________
// Написать цикл, который создает множество параграфов с 
// каждым десятым числом в промежутке от 100 до 50 
// (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

const numbersDiv = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  const paragraph = document.createElement("p");
  paragraph.textContent = i;
  numbersDiv.appendChild(paragraph);
}

// Вывод в консоль
// console.log("Задача: Создание параграфов с каждым десятым числом от 100 до 50 и добавление их в div с классом 'numbers'");


// Задача 2.
// _______________________________________________________________________________
// Написать цикл, который проходится по массиву строк, для каждой строки создает 
// параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = ["String 1", "String 2", "String 3", "String 4"];
const stringsContainer = document.querySelector(".strings_container");

strings.forEach(function(str) {
    const paragraph = document.createElement("p");
    paragraph.textContent = str;
    stringsContainer.appendChild(paragraph);
});

// Вывод задачи в консоль
// console.log("Задача: Создание параграфов для строк и добавление их в div с классом 'strings_container'");


// Задача 3.
// _______________________________________________________________________________
// Написать цикл, который проходится по массиву с объектами - у объектов свойства 
// first_name, last_name и  age (данные взять произвольные) - и создает карточки 
// только для совершеннолетних пользователей. Карточка должна содержать информацию 
// об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом 
// users_container.

const users = [
    { first_name: "John", last_name: "Smith", age: 37 },
    { first_name: "Alice", last_name: "Johnson", age: 18 },
    { first_name: "Bob", last_name: "Sincler", age: 16 },
  ];
  
  const usersContainer = document.querySelector(".users_container");
 
  users.forEach(function(user) {
    if (user.age >= 18) {
        const card = document.createElement("div");
        card.classList.add("user-card");
        card.innerHTML = `<p>Name: ${user.first_name} ${user.last_name}</p><p>Age: ${user.age}</p>`;
        usersContainer.appendChild(card);
    }
});