import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const refs = {
  email: feedbackForm.querySelector('input[name="email"]'),
  message: feedbackForm.querySelector('textarea[name="message"]'),
};
const { email, message } = refs;

const LOCAL_STORAGE_DATA = 'feedback-form-state';
let formData = {};

email.setAttribute('required', '');
message.setAttribute('required', '');

const saveInputData = ({ target }) => {
  const { name, value } = target;
  formData[name] = value;
  localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(formData));
};

const updateInputData = () => {
  const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA) || '{}');

  email.value = data.email || '';
  formData.email = data.email || '';

  message.value = data.message || '';
  formData.message = data.message || '';
};

const formSubmit = e => {
  e.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_DATA);

  console.log(formData);
  e.currentTarget.reset();
  formData = {};
};

updateInputData();

feedbackForm.addEventListener('submit', formSubmit);
feedbackForm.addEventListener('input', throttle(saveInputData, 500));
