// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//  border-color: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//  border-color: #4caf50;
// }

// #validation-input.invalid {
// border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', inputLengthValidation);


function inputLengthValidation(event){
    
    const inputValue = event.target.value;
    if (inputValue.length === dataLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
      } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
      }
}
