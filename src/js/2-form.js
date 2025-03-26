const formEl = document.querySelector('.feedback-form');
const FEEDBACK_DATA_KEY = 'feedback-form-state';

formEl.addEventListener('input', handleFormElInput);
formEl.addEventListener('submit', handleFormElSubmit);

let formData = { email: '', message: '' };

const initialFormData = localStorage.getItem(FEEDBACK_DATA_KEY);
if (initialFormData !== null && initialFormData !== '') {
  try {
    formData = JSON.parse(initialFormData);

    for (const fieldName in formData) {
      formEl.elements[fieldName].value = formData[fieldName];
    }
  } catch {}
}

function handleFormElInput(e) {
  const nodeName = e.target.nodeName;
  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    for (const fieldName in formData) {
      formData[fieldName] = formEl.elements[fieldName].value.trim();
    }

    localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formData));
  }
}

function handleFormElSubmit(e) {
  e.preventDefault();

  for (const fieldName in formData) {
    if (!formEl.elements[fieldName].value) {
      alert('Fill please all fields');

      return;
    }
  }

  for (const fieldName in formData) {
    formData[fieldName] = '';
    formEl.elements[fieldName].value = '';
  }

  localStorage.removeItem(FEEDBACK_DATA_KEY);

  console.log(formData);
}
