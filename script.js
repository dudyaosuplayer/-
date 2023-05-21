function clearForm() {
  document.getElementById("comment").value = "";
  document.getElementById('quantity').value = "";
  document.getElementById('option1').checked = false;
  document.getElementById('option2').checked = false;
  document.getElementById('option2').checked = false;
}

// Функция, отображающая кнопку скролла наверх при скроле
function toggleScrollTopBtn() {
  const scrollTopBtn = document.getElementById('scrollToTopBtn');

  if (document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

}

// Функция, сколлящая наверх
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// Функция для перевода первой буквы строки в верхний регистр
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Перевод даты в вид **<день недели>, <номер недели> неделя <месяц> <год> года
function getDayInfo(str) {
  let dateParts = str.split('.');

  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1] - 1);
  let year = parseInt(dateParts[2]);
  let week = Math.ceil(day / 7);

  let date = new Date(year, month, day);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let result = date.toLocaleDateString('ru-RU', options);
  let splitRes = result.split(',')


  return `${capitalizeFirstLetter(splitRes[0])}, ${week} неделя ${capitalizeFirstLetter(splitRes[1].trim().split(' ')[1])} ${year} года`;

}

// Удаление # из url
window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.href.split('#')[0]);
  }
});

// Вызов функции toggleScrollTopBtn() при событии скролла
window.onscroll = function () {
  toggleScrollTopBtn();
}


const data = document.querySelectorAll('.data') //Выбор всех элементов с классом data, куда будем вставлять getDayInfo()

//Вставка резульата функции getDayInfo() в каждый элемент с классом data
data.forEach((element) => {
  const elemDate = element.textContent;
  const fromDateToText = getDayInfo(elemDate);
  element.textContent = fromDateToText;
})

//Появление формы покупки
const buyBtns = document.querySelectorAll('.buy-btn');
const overlay = document.querySelector('.overlay');
const formContainer = document.getElementById('formContainer');
const buyBtnForm = document.getElementById('buyButton');
const closeBtnForm = document.getElementById('closeButton');


buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener('click', function () {
    overlay.classList.add('show');
  });
});

buyBtnForm.addEventListener('click', () => { alert('Покупка совершена!') })

closeBtnForm.addEventListener('click', () => {
  overlay.classList.remove('show');
  clearForm();
})

const form = document.getElementById('purchaseForm');
// Предотвращение отпавки формы, чтобы страница не перезагружалась
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Смена темы
const toggleThemeBtn = document.querySelector('.toggle-theme');
const style = document.getElementById('style');

toggleThemeBtn.addEventListener('click', function () {
  if (style.href.includes('light-theme.css')) {
    style.href = 'style/dark-theme.css';
  } else {
    style.href = 'style/light-theme.css';
  }
});