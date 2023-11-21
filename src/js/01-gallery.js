// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
galleryEl.style =  'list-style: none';

//? Ця функція створює HTML-розмітку для одного елемента списку зображень на основі переданих параметрів: опису (description), мініатюри (preview) та оригінального зображення (original). Вона повертає рядок HTML-коду, який містить li елемент з класом gallery__item, який в свою чергу містить посилання (a) з класом gallery__link, яке містить зображення (img) з класом gallery__image, src та alt атрибутами
const createLi = (description, preview, original) =>
  `
    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;

//? Ця функція створює HTML-розмітку списку зображень на основі масиву об'єктів, який містить інформацію про опис, мініатюру та оригінальне зображення. Вона використовує метод reduce() для обчислення результуючого рядка HTML-коду, використовуючи функцію createLi(), яка створює HTML-код для кожного елементу списку зображень.
const makeGalleryMarkup = gallery =>
  gallery.reduce(
    (acc, { description, preview, original }) =>
      (acc += createLi(description, preview, original)),
    ''
  );

//? Ця функція відповідає за додавання HTML-розмітки до списку зображень. Вона приймає розмітку як аргумент та додає її до DOM-дерева у вказане місце - до початку списку зображень.
const insertListItem = markup =>
  galleryEl.insertAdjacentHTML('afterbegin', markup);

//? викликає функцію makeGalleryMarkup з масивом galleryItems як аргументом, щоб отримати рядок HTML-коду, що містить розмітку списку зображень.
const listItemMarkup = makeGalleryMarkup(galleryItems);

//? викликає функцію insertListItem зі згенерованою розміткою як аргументом, щоб додати розмітку до DOM-дерева на початку списку зображень.
insertListItem(listItemMarkup);

//? створюється новий екземпляр класу SimpleLightbox, який легко налаштовується,  відкриває оригінальне зображення, коли користувач клікає на мініатюру.Конструктор SimpleLightbox приймає селектор, який вказує на посилання зображень, та параметри конфігурації, такі як настройки для підписів.У цьому випадку, підпис буде братися з атрибута alt зображення, а затримка перед показом підпису становить 250 мілісекунд.
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
