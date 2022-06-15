export const getTimeInterval = (commentDate: string) => {
  let secondsInHour = 3840;
  let secondsInDay = 86400;
  let startDate = new Date(commentDate);
  let endDate = new Date();
  let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  if (seconds < secondsInHour) {
    let currentMinutes = Math.ceil(seconds / 60);
    return `${currentMinutes} ${declOfNum(currentMinutes, ['минута', 'минуты', 'минут'])} назад`
  } else if (seconds < secondsInDay) {
    let currentHours = Math.ceil(seconds / 60 / 60);
    return `${currentHours} ${declOfNum(currentHours, ['час', 'часа', 'часов'])} назад`
  }

  let currentDays = Math.ceil(seconds / secondsInDay);
  return `${currentDays} ${declOfNum(currentDays, ['день', 'дня', 'дней'])} назад`
}

export const declOfNum = (n: number, text_forms: string[]) => {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}