// задание 2

/*Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/

let x;

switch (typeof x) {
  case 'number':
     console.log('x - число');
     break;
  case 'string':
     console.log('x - строка');
     break;
  case 'boolean':
     console.log('x - логический тип');
     break;
  default:
     console.log('тип х не определён')
}