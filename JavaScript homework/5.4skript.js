// задание 4 

// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min));
  }
   console.log(getRandom(0, 100));