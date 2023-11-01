// SPメニュー 表示/非表示
const header = document.querySelector('.header');
const menu_button = document.querySelector('.js-menu-trigger');
menu_button.addEventListener('click', () => {
  if (header.classList.contains('is-menu-open')) {
    header.classList.remove('is-menu-open');
    header.classList.add('is-menu-close');
  } else {
    header.classList.remove('is-menu-close');
    header.classList.add('is-menu-open');
  }
});

// SPメニューのリンクをクリックしたらメニューを閉じる
const sp_menu_items = document.querySelectorAll('.sp-menu-item');
sp_menu_items.forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.remove('is-menu-open');
    header.classList.add('is-menu-close');
});
});

// SPメニューの背景をクリックしたらメニューを閉じる
const overlay = document.querySelector('.sp-menu_overlay');
overlay.addEventListener('click', () => {
  header.classList.remove('is-menu-open');
  header.classList.add('is-menu-close');
});


// ヘッダーメニューのアクティブクラスを切り替える
const header_menu_items = document.querySelectorAll('.header-menu-item');
header_menu_items.forEach((item) => {
  item.addEventListener('click', () => {
    header_menu_items.forEach((item) => {
      item.classList.remove('is-active');
    });
    item.classList.add('is-active');
  });
});