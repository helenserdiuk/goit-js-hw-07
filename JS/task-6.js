/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

let validInPut = document.getElementById("validation-input");

let dataLenght = validInPut.getAttribute("data-length");
let inDataLenght = parseInt(dataLenght);

validInPut.onblur = function () {
  if (validInPut.value.length === inDataLenght) {
    validInPut.classList.remove("invalid");
    validInPut.classList.add("valid");
  } else {
    validInPut.classList.remove("valid");
    validInPut.classList.add("invalid");
  }

  if (validInPut.value.length === 0) {
    validInPut.classList.remove("valid");
    validInPut.classList.remove("invalid");
  }
};
