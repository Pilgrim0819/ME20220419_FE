// epilepsy
let main = document.querySelector('.main');
let a = 0;

setInterval(function () {
  0 === a
    ? ((main.style.backgroundColor = 'black'), (a = 1))
    : ((main.style.backgroundColor = 'white'), (a = 0));
}, 10);
