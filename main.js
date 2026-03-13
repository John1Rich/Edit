// Контейнер основного контента под шапкой
const mainContent = document.getElementById("main-content");

// Константы форматов
const FULL = "Full";
const SHORTS = "Shorts";

// Массив объектов видео
const projects = [
  //id - ID ссылки с google drive
  {
    id: "1MSkRhxuhWTXYq21_HPTXkz6fMkbUNwgQ",
    title: "Коммерческий проект | Тест-драйв",
    format: FULL,
    poster: "1S_r5tAgBoEi7VzYVdFBw-oFaXqBpI3xw",
  },
  {
    id: "19jF8uKX0YAqtgtlv6I43n1GTyWi1uwd_",
    title: "Социальный проект | Абилимпикс",
    format: FULL,
    poster: "",
  },
  {
    id: "1hnpve9vgvmP__Dc3KvLTyy71wrzz27Mp",
    title: "Репортаж музея",
    format: FULL,
    poster: "1LrtrKzFegNtEpI61OaX_4e-pih_MJZol",
  },
  {
    id: "1gkHK0BrBVKH6nr80ftCUjkplo1hY_dq4",
    title: "Реклама барбершопа",
    format: SHORTS,
    poster: "12iHdZnMU9MT9PJfIZxh1ImBHCcgDPC7W",
  },
  {
    id: "1g2codtoM_rP7akCtm8WR3UfBmcq6Yvw_",
    title: "Реклама оптики | Лунет",
    format: SHORTS,
    poster: "1FV2djOZC-CgKIKbS6l1AiEuN5WOradgL",
  },
  {
    id: "1GnQKwgKdlNmjeI1oFVTf6geIQEs-GQd-",
    title: "Интервью | Плюшки",
    format: SHORTS,
    poster: "1R6XGKXbZAHejSLnYFfS8IeZpT3YsH4Fa",
  },
  {
    id: "1K2GyqNAm5iG3zhZZ75YBc2icfh2x6iRF",
    title: "Подкаст | Актёрская курилка",
    format: SHORTS,
    poster: "1fwOmpf4OTwT0rLp-XWSBzUH9Anp5VjMD",
  },
  {
    id: "1L5e85TYaV83NRuCQdL8FNhrzdRe9NAjG",
    title: "Реклама парка",
    format: SHORTS,
    poster: "1nz5rPF4J84TBxcOA70-r1hDKo2o5jFLP",
  },
];

function renderGallery() {
  mainContent.innerHTML = '<div class="gallery"></div>';

  // Контейнер галлерия всех видео
  const gallery = document.querySelector(".gallery");

  // Цикл рисования видео
  projects.forEach((project) => {
    // Контейнер-карточка для видео
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    // Добавляем класс формата (shorts или full)
    // videoCard.classList.add(project.format.toLowerCase());

    // Контейнер для заголовка и подзаголовка видео
    const header = document.createElement("div");
    header.className = "video-header";

    // Заголовок видео
    const title = document.createElement("h3");
    title.textContent = project.title;

    // Подзаголовок видео
    const subTitle = document.createElement("p");
    subTitle.textContent = project.format;

    // Контейнер специально для видео (чтобы контролировать 16/9)
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    // Заглушка, чтоб сайт не тормозил
    const videoPlaceholder = document.createElement("div");
    videoPlaceholder.className = "video-placeholder";

    // Ссылка на превью
    const posterUrl = project.poster
      ? `https://drive.google.com/thumbnail?id=${project.poster}&sz=w1000`
      : `https://drive.google.com/thumbnail?id=${project.id}&sz=w1000`;

    // Устанавливаем превью
    videoPlaceholder.style.backgroundImage = `url('${posterUrl}')`;

    // Добавим иконку плей (символ), чтобы было похоже на макет
    const playIcon = document.createElement("span");
    playIcon.textContent = "▶";
    videoPlaceholder.append(playIcon);

    // Собираем структуру
    header.append(title, subTitle);
    videoContainer.append(videoPlaceholder);
    videoCard.append(header, videoContainer);
    gallery.append(videoCard);

    // Логика загрузки по клику
    videoCard.onclick = () => {
      const iframe = document.createElement("iframe");

      // Настраиваем атрибуты
      iframe.src = `https://drive.google.com/file/d/${project.id}/preview`;

      // Даём разрешения для работы плеера
      iframe.allow = "autoplay; fullscreen";
      iframe.className = "video-frame";

      // Заменяем заглушку на реальное видео
      videoPlaceholder.replaceWith(iframe);

      // Удаляем обработчик клика, чтобы не перезагружать видео снова
      videoCard.onclick = null;
    };
  });
}

function renderHome() {
  mainContent.innerHTML = `<div class="home-page">
      <h1>Я видеомонтажер</h1>
      <p>Создаю динамичные ролики для соцсетей и бизнеса:
от Reels/Shorts до длинных выпусков на YouTube</p>
      <h2>Навыки и услуги</h2>
      <ul>Базовый монтаж: Нарезка, субтитры, динамика <br>
      Визуал: Базовая цветокоррекция, использование готовых шаблонов Motion Graphics (титры, плашки)<br>
      Звук: Чистка голоса, подбор музыки без авторских прав и под ваш вкус</ul>
    </div>`;
}

function renderContacts() {
  mainContent.innerHTML = `<div class="contacts-page">
      <h2>Готовы работать вместе и вывести свой контент
      на новый уровень?</h2>
      <button id="btn-mail" title="Почта" onclick="window.open('https://t.me/your_link', '_blank')">
          <i class="fi fi-rr-envelope"></i>
        </button>
      <p>Email: your-email@mail.com</p>
      <button id="btn-tg" title="Телеграм" onclick="window.open('https://t.me/your_link', '_blank')">
          <i class="fi fi-brands-telegram"></i>
        </button>
      <p>Telegram: @yournickname</p>
    </div>`;

  // Создаём и сразу привязываем кнопки, иначе выдаст null
  // Или внутри innerHTML свойсвто onclick можно привязать
  // document.getElementById("btn-mail").onclick = () => {
  //   window.open('https://t.me/your_link", "_blank"');
  // };

  // document.getElementById("btn-tg").onclick = () => {
  //   window.open("https://t.me/your_link", "_blank");
  // };
}

// Слушатели кликов
document.getElementById("btn-home").onclick = renderHome;
document.getElementById("btn-gallery").onclick = renderGallery;
document.getElementById("btn-contacts").onclick = renderContacts;

// document.getElementById("btn-github").onclick = () => {
//   window.open('https://t.me/your_link", "_blank"');
// };

// const mailBtn = document.createElement("button");
// mailBtn.id = "btn-mail";
// mailBtn.title = "Почта";
// const mailIcon = document.createElement("i");
// mailIcon.className = "fi fi-rr-envelope";

// mailBtn.append(mailIcon);

// mailBtn.onclick = () => {
//   window.open('https://t.me/your_link", "_blank"');
// };

// const tgBtn = document.createElement("button");
// tgBtn.id = "btn-tg";
// tgBtn.title = "Телеграм";
// const tgIcon = document.createElement("i");
// tgIcon.className = "fi fi-brands-telegram";

// tgBtn.append(tgIcon);

// tgBtn.onclick = () => {
//   window.open('https://t.me/your_link", "_blank"');
// };

// По умолчанию при загрузке открываем Главную
renderHome();

// // Клик Дом
// const homeBtn = document.querySelector("fi fi-rr-home");

// // homeBtn.addEventListener('click', () => {

// // })

// // Клик галерея
// const galleryBtn = document.querySelector("fi fi-rr-gallery");

// if (galleryBtn) {
//   galleryBtn.addEventListener("click", () => {
//     // e.preventDefault();
//     document.querySelector("gallery").scrollIntoView({
//       behavior: "smooth", //плавная прокрутка
//     });
//   });
// }
