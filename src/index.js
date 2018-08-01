/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++ ) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var results = [];

    for (let i = 0; i < array.length; i++ ) {
        var item = fn(array[i], i, array);

        results.push(item);
    }

    return results;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let i = 0;
    let result = initial || array[i++];

    while (i < array.length) {
        result = fn(result, array[i], i, array);
        i++;
    }

    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [];

    for (let prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }
        arr.push(prop.toUpperCase());
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var arr = [];
    var last = to > array.length ? array.length : to;
    var begin = (-from > array.length) ? 0 : from;
    if ((from < 0) > ( to < 0)) {
        return arr;
    }
    if (from > array.length || from == to || to < from) {

        return arr;
    }

    if (from >= 0) {
        for (var i = begin; i < last; i++) {
            arr.push(array[i]);
        }
    } else if (to < 0) {
        for (i = begin; i < last + array.length; i++) {
            arr.push(array[i]);
        }
    } else if (from < 0) {
        for (i = array.length + begin; i < last; i++) {
            arr.push(array[i]);
        }
    } else if (from < 0 && to < 0) {
        for (i = array.length + begin; i < array.length + last; i++) {
            arr.push(array[i]);
        }
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
