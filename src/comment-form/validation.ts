import {Values} from "./index";

export const validateInputs = (values: Values): Values => {
  const errors: Values = {username: '', avatar_url: '', content: ''};

  // username validation
  if (!values.username) {
    errors.username = 'Обязательно';
  } else if (values.username.length < 3) {
    errors.username = 'Не меньше 3 символов';
  } else if (values.username.length > 16) {
    errors.username = "Не больше 16 символов"
  }

  // avatar url validation
  if (!values.avatar_url) {
    errors.avatar_url = "Обязательно";
  } else if (!validateUrl(values.avatar_url)) {
    errors.avatar_url = "Неправильная ссылка"
  } else if (values.avatar_url.length > 500) {
    errors.avatar_url = "Слишком длинная ссылка"
  }

  // content validation
  if (!values.content) {
    errors.content = 'Обязательно';
  } else if (values.content.length < 3) {
    errors.content = 'Не меньше 3 символов';
  } else if (values.content.length > 255) {
    errors.content = "Не больше 255 символов"
  }

  return errors;
};

function validateUrl(url: string): boolean {
  const url_pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return url_pattern.test(url)
}