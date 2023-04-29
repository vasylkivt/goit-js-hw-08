import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_DATA = 'feedback-form-state';

feedbackForm.elements.email.setAttribute('required', '');
feedbackForm.elements.message.setAttribute('required', '');

updateInputData();

feedbackForm.addEventListener('submit', formSubmit);
feedbackForm.addEventListener('input', throttle(saveInputData, 500));

//?Ця функція отримує подію evt від обробника введення даних форми. Вона отримує збережені дані з локального сховища, парсить їх в об'єкт або створює новий порожній об'єкт, додає значення введеного поля до об'єкту збережених даних за ключем evt.target.name, а потім зберігає оновлені дані в локальному сховищі у форматі JSON.
function saveInputData(evt) {
  // Отримуємо збережені дані з локального сховища
  let persistedData = localStorage.getItem(LOCAL_STORAGE_DATA);

  // Перевіряємо, чи є збережені дані і парсимо їх з формату JSON в об'єкт, або створимо новий об'єкт
  persistedData = persistedData ? JSON.parse(persistedData) : {};

  // Зберігаємо значення введених даних для поточного елемента форми в об'єкт збережених даних
  persistedData[evt.target.name] = evt.target.value;

  // Зберігаємо оновлені дані в локальному сховищі у форматі JSON
  localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(persistedData));
}

//?Ця функція отримує збережені дані з локального сховища за ключем LOCAL_STORAGE_DATA. Якщо дані існують, вони парсяться з формату JSON у вигляді об'єкта. Потім функція проходить по кожній парі ключ-значення в об'єкті збережених даних і встановлює значення поля форми відповідно до ключа name.
function updateInputData() {
  let persistedData = localStorage.getItem(LOCAL_STORAGE_DATA);

  if (persistedData) {
    persistedData = JSON.parse(persistedData);
    Object.entries(persistedData).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
}

//? Ця функція виконується під час подання форми. Вона перешкоджає стандартному поведінці форми за допомогою e.preventDefault(). Потім вона видаляє збережені дані з локального сховища, і обробляє потрібні дані
function formSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_DATA);

  const formDataObj = {};
  const formData = new FormData(feedbackForm);

  formData.forEach((value, key) => {
    console.log(key, value)
    formDataObj[key] = value;
  });

  console.log('Дані з форми:', formDataObj);

  evt.currentTarget.reset();
}
