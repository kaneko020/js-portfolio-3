const header_menu_items = document.querySelectorAll('.header-menu-item');

header_menu_items.forEach((item) => {
  item.addEventListener('click', () => {
    header_menu_items.forEach((item) => {
      item.classList.remove('is_active');
    });
    item.classList.add('is_active');
  });
});