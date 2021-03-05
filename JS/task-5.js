/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 подставляет его текущее значение в span#name-output. Если инпут пустой, 
 в спане должна отображаться строка 'незнакомец'. */

const nameInPut = document.querySelector("#name-input");
const nameOutPut = document.querySelector("#name-output");

nameInPut.oninput = () =>
  (nameOutPut.innerHTML =
    nameInPut.value === "" ? "незнакомец" : nameInPut.value);
