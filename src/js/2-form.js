import { onEmailInput, onLoadData, onSubmitForm } from './handler';
import { refs } from './refs';
document.addEventListener('DOMContentLoaded', onLoadData);
refs.user_form.addEventListener('input', onEmailInput);
refs.user_form.addEventListener('submit', onSubmitForm);
