//1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
const getInfoArr = () => {
    const arrOfInfo = [];
    for (let key in citiesAndCountries) {
        arrOfInfo [arrOfInfo.length] = `${key} - это ${citiesAndCountries[key]}`
    } return arrOfInfo;
}
console.log(getInfoArr());

//2
//Вариант 1
function getArray(ammount) {
    if ( ammount % 3 !== 0) return 
    const result = [];
    let data = 1;
    for ( let i = 1; i <= ammount / 3; i++) {
        const entryArr = [];
        for (let j = 0; j < 3; j++) {
            entryArr[entryArr.length] = data++;
        }
        result[result.length] = entryArr;
    }
    return result
}
console.log(getArray(9));
//Вариант 2
function getArray(ammount) {
    if ( ammount % 3 !== 0) return 
    const result = [];
    let data = 1;
    for ( let i = 1; i <= ammount / 3; i++) {
        const entryArr = [];
        for (let j = 0; j < 3; j++) {
            entryArr[entryArr.length] = data++;
        }
        result[result.length] = entryArr;
    }
    return result
}
console.log(getArray(12));
//3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const getNameOfDay = (name, day) => (namesOfDays[name][day-1]);
console.log(getNameOfDay('en', 7));
console.log(getNameOfDay('ru', 3));

//4
const arr = [19, 5, 42, 2, 77];
let macro = 0;
let min = 0;
for ( let i = 0; i < arr.length; i ++) {
    const iterationElem = arr[i];
    if (i === 0) {
         macro = iterationElem;
         continue;
    }
    if (i === 1) {
        if(iterationElem < macro) {
            min = macro;
            macro = iterationElem;
            continue;
        }
        continue;
   }
    if (iterationElem < macro) {
        min = macro;
        macro = iterationElem;
        continue;
    }
    if (iterationElem < min) {
        min = iterationElem;
        continue;
    }

}
console.log(macro + min);

//5
const array = [1, 0, 1, 1];
let result = 0;
let count = 1;
for (let i = array.length - 1; i >= 0; i--) {
    result += array[i] === 1 ? count : 0;
    count *= 2;
}
console.log(result);