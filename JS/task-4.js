/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const button = {
  inc: document.querySelector("[data-action='increment']"),
  decr: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.inc.addEventListener("click", increment);
button.decr.addEventListener("click", decrement);
