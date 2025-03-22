const FEEDBACK_DATA_KEY = 'feedback';
const form = document.querySelector('.feedback-form');
try {
  const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));
  Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];
    if (storageValue) {
      element.value = storageValue;
    }
  });
} catch (e) {}

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formObject));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = event.target.email.value.trim();
  const messageValue = event.target.message.value.trim();
  if (!emailValue || !messageValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formText = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formText);
  localStorage.removeItem(FEEDBACK_DATA_KEY);
  form.reset();
});
