/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = promt("Скільки фільмів ви вже переглянули", ""),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

// for (let i = 1; i < 3; i++) {
//     const a = promt("Один з останніх фільмів", ""),
//         b = promt("На скільки оціните його", "");

//     if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log('Всьо, молодецю сончеко, ставлю шавуху');
//     } else {
//         console.log('Валєра заїбав, введи нормально дані');
//         i--;        
//     }

// }


if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


let i = 1;
while (i < 3) {
    const a = promt("Один з останніх фільмів", ""),
        b = promt("На скільки оціните його", "");

    i++;

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Всьо, молодецю, ставлю шавуху');
    } else {
        console.log('Валєра заїбав, введи нормально дані');
        i--;
    }
}



/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/






function returnNeighboringNumbers(number) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = number - 1 + i;
    }

    return arr;
}
console.log(returnNeighboringNumbers(10));





function getMathResult(a, b) {
    let result = '';

    if (typeof (b) != 'number') { 
        result += `${a}`;
    } else if ( b <= 1) {
         result += `${a}`;
    } else {
        for (let i = 1; i <= b; i++) {
            result += `${i * a}`;
            if (i * a === a * b) {
                break;
            } else {
                result += `---`;
            }
        }
    }

    return result;
    
}

console.log(getMathResult(3, 10));