import { STORAGE_KEYS } from './constants';
import { refs } from './refs';

export function onEmailInput() {
  const email = refs.user_email.value.trim();

  const message = refs.user_message.value.trim();
  localStorage.setItem(STORAGE_KEYS.USER_FORM, JSON.stringify({ email: email, message: message }));
}

export function onSubmitForm(event) {
  event.preventDefault();
  const email = refs.user_email.value.trim();

  const message = refs.user_message.value.trim();
  if (email === '' || message === '') {
    alert('Fill please all fields');
  }
  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEYS.USER_FORM);
  refs.user_form.reset();
}

export function onLoadData() {
  try {
    const dataLoud = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_FORM));
    if (dataLoud !== null) {
      refs.user_email.value = dataLoud.email;
      refs.user_message.value = dataLoud.message;
    }
  } catch (error) {
    console.log(error);
  }
}
