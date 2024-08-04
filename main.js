const button_show = document.querySelector('.button_show');
const gallery__imges_item = document.querySelectorAll('.gallery__imges_item').length;
const burger__menu = document.querySelector('.burger__menu');
const header__menu_list = document.querySelector('.header__menu_list');
const burger_btn = document.querySelectorAll('.burger_btn');
const header__menu__item = document.querySelectorAll('.header__menu__item');



burger__menu.addEventListener('click', () => {
  header__menu_list.classList.toggle('menu__list--mobail');
 

  burger_btn.forEach(burger_btn => {
    burger_btn.classList.toggle('burger_btn--active');
  });
  header__menu__item.forEach(header__menu__item => {
    header__menu__item.classList.toggle('header__menu__item--active');
  });
});



document.querySelectorAll('.gallery__menu_filter').forEach(item => {
    item.addEventListener('click', function () {
        const filter = this.getAttribute('data-id');
        const items = document.querySelectorAll('.gallery__imges_item');
        
        // Удаляем класс активного элемента у всех фильтров
        document.querySelectorAll('.gallery__menu_filter').forEach(menuItem => {
            menuItem.classList.remove('gallery__menu_item--active');
        });

        // Добавляем класс активного элемента к выбранному фильтру
        this.classList.add('gallery__menu_item--active');

        // Фильтруем изображения
        items.forEach(image => {
            if (filter === 'all') {
                image.style.display = 'block'; // Показываем все изображения
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = 'block'; // Показываем соответствующие изображения
                } else {
                    image.style.display = 'none'; // Скрываем другие
                }
            }
        });
    });
});

let items = 6;

button_show.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.gallery__imges_list').children)
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if(visItems.length === gallery__imges_item){
        button_show.style.display = 'none';   
    }
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});




