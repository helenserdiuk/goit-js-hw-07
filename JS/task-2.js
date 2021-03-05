/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement(). */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let newList = document.querySelector("#ingredients");

const array = ingredients.map((el) => {
  const listItems = document.createElement("li");
  listItems.textContent = el;
  return listItems;
});

newList.append(...array);

console.log(newList);
