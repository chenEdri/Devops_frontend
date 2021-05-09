
export const utilService = {
  getRandomColor,
  getRandomNumber,
  findIdxById,
  findIdxByName,
  getDate,
  getLastDays
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function findIdxById(arr, id) {
  return arr.findIndex(item => item._id === id)
}

function findIdxByName(arr, name) {
  return arr.findIndex(item => item.name === name);
}

function getDate() {
  let date = new Date();
  date = _getDateString(date);
  return date;
}

function getLastDays(days) {
  const lastFiveDays = [];
  const date = new Date();
  const year = +date.getFullYear();
  for (let i = 0; i < days; i++) {
    let last = new Date(date.getTime() - (i * 24 * 60 * 60 * 1000));
    let lastDate = _getDateString(last)
    lastFiveDays.push(lastDate)
  }
  return lastFiveDays
}

function _getDateString(date) {
  let month = date.getMonth() + 1;
  month = (month < 10) ? '0' + month : +month;
  let day = date.getDate();
  if (day < 10) day = '0' + day;
  let year = +date.getFullYear();
  return day + '-' + month + '-' + year;
}