/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."        
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      moviList = document.querySelector('.promo__interactive-list'),
      btn = document.querySelector('button'),
      inp = document.querySelector('.adding__input');

// 1
adv.forEach(item => {
    item.remove();
});

// 2
genre.textContent = 'драма';

// 3
poster.style.backgroundImage = 'url("../img/bg.jpg")';

// 4
moviList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    moviList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
// Возьмите свой код из предыдущей практики
// inp.oninput = function() {
//     console.log(inp.value);
//   };
// ;



function addFilm(evt) {    
    evt.preventDefault();
    // return inp.value;
    console.log(inp.value);
};
btn.addEventListener('click', addFilm);
console.dir(movieDB.movies);