import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_DATA = 'feedback-form-state';

feedbackForm.elements.email.setAttribute('required', '');
feedbackForm.elements.message.setAttribute('required', '');

updateInputData();

feedbackForm.addEventListener('submit', formSubmit);
feedbackForm.addEventListener('input', throttle(saveInputData, 500));

/**
 *? Зберігає введені дані з полів у локальне сховище
 * @param {Event} event - Об'єкт події input
 */
function saveInputData({ target: { name, value } }) {
  // Отримуємо збережені дані з локального сховища
  let persistedData = localStorage.getItem(LOCAL_STORAGE_DATA);

  // Перевіряємо, чи є збережені дані і парсимо їх з формату JSON в об'єкт, або створимо новий об'єкт
  try {
    persistedData = persistedData ? JSON.parse(persistedData) : {};
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  // Зберігаємо значення введених даних для поточного елемента форми в об'єкт збережених даних
  persistedData[name] = value;

  // Зберігаємо оновлені дані в локальному сховищі у форматі JSON
  localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(persistedData));
}

/**
 *? Оновлює дані полів форми з локального сховища,функція проходить по кожній парі ключ-значення в об'єкті збережених даних і встановлює значення поля форми відповідно до ключа name.
 */
function updateInputData() {
  let persistedData = localStorage.getItem(LOCAL_STORAGE_DATA);

  try {
    persistedData = JSON.parse(persistedData);

    Object.entries(persistedData).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  } catch (error) {
    localStorage.removeItem(LOCAL_STORAGE_DATA);
    console.log(error.name);
    console.log(error.message);
  }
}

/**
 *? Обробляє подію submit форми. Потім вона видаляє збережені дані з локального сховища, і обробляє потрібні дані
 * @param {Event} evt - Об'єкт події submit
 */
function formSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_DATA);

  const formDataObj = {};
  const formData = new FormData(feedbackForm);

  formData.forEach((value, key) => {
    console.log(key, value);
    formDataObj[key] = value;
  });

  console.log('Дані з форми:', formDataObj);

  evt.currentTarget.reset();
}
