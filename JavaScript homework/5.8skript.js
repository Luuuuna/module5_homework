// задание 8

/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let myMap = new Map();
myMap.set("apple", "fruit");
myMap.set("cucumber", "vegetable");
myMap.set("cherry", "berry");

myMap.forEach((values, keys) => {
      console.log(`Key - ${keys}, Value - ${values}`);
    })