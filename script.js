'use strict';


//реализация map

function map(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));

    }

    return result;

}


//реализация filter

function filter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }

    return result;

}


//функция, которая возвращает объект( ключ -  дата, значение - массивы с сообщениями в этот день).

const notification = [
    {
        date: '31/07/2019',
        msg: 'Some message here',
    }

];

//вариант без метода reduce

function returnDateMessage(array, date, msg) {

    let result = {};

    for (let i = 0; i < array.length; i++) {

        if (!result[array[i][date]]) {
            result[array[i][date]] = [];
        }

        result[array[i][date]].push(array[i][msg]);

    }

    return result;

}


//вариант c помощью метода reduce

const result = notification.reduce(function (accum, elem) {

    const propertyNameDate = elem.date;
    const propertyNameMsg = elem.msg;

    if (!accum[propertyNameDate]) {
        accum[propertyNameDate] = [];
    }

    accum[propertyNameDate].push(propertyNameMsg);

    return accum;

}, {});


