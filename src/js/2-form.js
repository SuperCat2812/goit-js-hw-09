const refs = {
  user_email: document.querySelector('input[type="email"]'),
  user_message: document.querySelector('textarea'),
  user_form: document.querySelector('.feedback-form'),
  user_btn: document.querySelector('button[type="submit"]'),
};

const STORAGE_KEYS = {
  USER_FORM: 'feedback-form-state',
};

const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', onLoadData);
refs.user_form.addEventListener('input', onEmailInput);
refs.user_form.addEventListener('submit', onSubmitForm);

function onEmailInput() {
  const email = refs.user_email.value.trim();

  const message = refs.user_message.value.trim();
  formData.email = email;
  formData.message = message;

  try {
    localStorage.setItem(
      STORAGE_KEYS.USER_FORM,
      JSON.stringify({ email: email, message: message })
    );
  } catch (error) {
    console.log(error);
  }
}

function onSubmitForm(event) {
  event.preventDefault();
  const email = refs.user_email.value.trim();

  const message = refs.user_message.value.trim();
  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEYS.USER_FORM);
    refs.user_form.reset();
    formData.email = '';
    formData.message = '';
  }
}

function onLoadData() {
  try {
    const dataLoud = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_FORM));
    if (dataLoud !== null) {
      formData.email = dataLoud.email;
      formData.message = dataLoud.message;
      refs.user_email.value = dataLoud.email;
      refs.user_message.value = dataLoud.message;
    }
  } catch (error) {
    console.log(error);
  }
}
