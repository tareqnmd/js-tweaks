const child = document.querySelector('.child');
const text = child.closest('.parent').querySelector('.header').innerText;
console.log(text);
