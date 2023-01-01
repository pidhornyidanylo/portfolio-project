var menu = document.querySelector('.menu'),
    burger = document.querySelector('.burger'),
    closer = document.querySelector('.menu_close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});
closer.addEventListener('click', () => {
    menu.classList.remove('active');
});

var count = document.querySelectorAll('.skills_wrap-count'),
    line = document.querySelectorAll('.skills_wrap-line span');

count.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});