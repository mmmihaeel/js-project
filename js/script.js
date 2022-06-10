console.log(8 % 4);

//я нахуй фронтендєр

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

    if (typeof (b) !== 'number' || b <= 1) { 
        return a;
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

console.log(getMathResult(3, `1`));





function calculateVolumeAndArea(cubeRibLength) {
    if (typeof(cubeRibLength) !== String && cubeRibLength > 0 && cubeRibLength % 1 === 0) {
        return  `Об'єм куба: ${cubeRibLength * cubeRibLength * cubeRibLength}, площа всієї поверхні: ${6 * cubeRibLength * cubeRibLength}`;
    } else {
        return 'При обчисленні виникла помилка';
    }
    
    
}
console.log(calculateVolumeAndArea(10));

function getCoupeNumber(numberOfPlace) {
    
    if (numberOfPlace > 0 && numberOfPlace <= 36 && typeof (numberOfPlace) !== String && numberOfPlace % 1 === 0) {
        if (numberOfPlace < 5 ) {
            return 1;
        } else if (numberOfPlace < 9) {
            return 2;
        } else if (numberOfPlace < 9) {
            return 2;
        } else if (numberOfPlace < 13) {
            return 3;
        } else if (numberOfPlace < 17) {
            return 4;
        } else if (numberOfPlace < 21) {
            return 5;
        } else if (numberOfPlace < 25) {
            return 6;
        } else if (numberOfPlace < 29) {
            return 7;
        } else if (numberOfPlace < 33) {
            return 8;
        } else if (numberOfPlace <= 36 ) {
            return 9;
        }       
        
    } else if (numberOfPlace <= 0 && numberOfPlace > 36){
        return "Таких місць у вагоні не існує";
    } else {
        return "Помилка, перевірте правильність введеного номеру";
    }

}
console.log(getCoupeNumber(4));




function getTimeFromMinutes(minutes) {
    let hours = "";
    if (minutes < 0 || typeof (minutes) === String) {
        return "Помилка, перевірте дані";   
    } else if (Math.floor(minutes / 60) === 1) {
        hours = "година";

    } else if (Math.floor(minutes / 60) <= 4) {
        hours = "години";
    } else {
        hours = "годин";
    }
    return `Це ${Math.floor(minutes/60)} ${hours} та ${minutes - Math.floor(minutes/60) * 60} хвилин`;
}
console.log(getTimeFromMinutes(60));



function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
console.log(findMaxNumber(1, 2, 3, 4 ));


function fib(number) {
    let result = '';
    for (let i = 0; i < number; i++){
        result += `${i}`;
        for (let j = 1; j < i + number; j++){ 
            result += `${j}`;
        }

        

        result += ` ${i} ${i+j}`; 
    }    
 
    return result;
}






const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = `Cем'я состоит из: `;

    for (let i = 1; i <= arr.length; i++) {
        result += `${arr[i-1]} `;
    }

    return result;
}

console.log(showFamily(family));






const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let result = ``;

    for (let i = 1; i <= arr.length; i++) {
        result += `${arr[i - 1].toLowerCase()}\n`;

    }

    return result;
    
}

console.log(standardizeStrings(favoriteCities));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    showAgeAndLangs: function (plan) {
        const { age, skills: { languages } } = plan;
        let result = `Мне ${age} и я владею язиками: `;
        for (let i = 0; i < languages.length; i++) {
            result += `${languages[i].toUpperCase()} `;
        }
        return result;
    }
};

function showExperience(plan) {


    const { skills: { exp } } = plan;

    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let result = ``;
    for (let key in programmingLangs) {
        result += `Язик ${key} изучен на ${programmingLangs[key]} \n`;
    }
    return result;

}

console.log(showProgrammingLangs(personalPlanPeter));


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



const someString = 'This is some strange string';

function reverse(str) {
    let result = ``;
    if (typeof str === 'string') {
        for (let i = str.length - 1; i >= 0; i--) {
            result += `${str[i]}`;
        }
    } else {
        result += `Ошибка!`;
    }

    return result;
}

console.log(reverse(someString));




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = `Доступные валюты:\n`;
    if (arr.length !== 0) { 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== missingCurr) {
                result += `${arr[i]}\n`;
            } else {
                continue;
            }
       }
    } else {
        result = 'Нет доступных валют!';
    }

    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));






const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 10,
            length: 7
        }
    ],
    height: 7,
    moneyPer1m3: 70,
    budget: 1002500
};
function isBudgetEnough(data) {
    let result = 0;
    const { shops } = data;
    const { height,  moneyPer1m3, budget} = data;
    for (let i = 0; i < shops.length; i++) {
        const { width, length } = shops[i];
        result += width * length;
        
    }
    if (budget - (result * height * moneyPer1m3) >= 0 ) {
         return 'Бюджета достачно';
    }else {
         return 'Бюджета недостаточно';
     }
  
    
}
console.log(isBudgetEnough(shoppingMallData));



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam' , `Zlatan` ];

function sortStudentsByGroups(arr) {
       arr = arr.sort();
       let a = [], b = [], c = [],  other = [];
       for (let i = 0; i < arr.length; i++){
          if(i < 3){
              a.push(arr[i]); 
          } else if(i < 6){
              b.push(arr[i]);
          }else if(i < 9){
              c.push(arr[i]);
          }else{
              other.push(arr[i]);
          }
           
       } 
      if(other.length !== 0){ 
          other = other.join(`, `);
      }else{
          other = `-`;
          }
          
     return [a, b, c, `Оставшиеся студенты: ${other}`] ;
}

console.log(sortStudentsByGroups(students));








// function rememberMyFilms() {
//     for (let i = 1; i < 3; i++) {
//         const a = prompt("Один з останніх фільмів", ""),
//             b = prompt("На скільки оціните його", "");

//         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Всьо, молодецю сончеко, ставлю шавуху');
//         } else {
//             console.log('Валєра заїбав, введи нормально дані');
//             i--;
//         }

//     }
// }

// function start() {
//     numberOfFilms = +prompt("Скільки фільмів ви вже переглянули", "");
    
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Скільки фільмів ви вже переглянули", "");
//     }

// }
// start();
// function detectPersonalLevel() {

//     if (personalMovieDB.count <= 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }


// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }