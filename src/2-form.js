import { onEmailInput, onLoadData, onSubmitForm } from './js/handler';
import { refs } from './js/refs';
document.addEventListener('DOMContentLoaded', onLoadData);
refs.user_form.addEventListener('input', onEmailInput);
refs.user_form.addEventListener('submit', onSubmitForm);
