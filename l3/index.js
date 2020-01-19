//неизменяемую переменную
const var1 = 2;


//чистую функцию
const foo = (x, y) => x * y;



//функцию первого порядка
const bar = function greeting() {
    console.log('Hello World');
}


//функцию высшего порядка
function fc1() {}

function fooWithFc(fc) {
    foo()
    fc()
}
fooWithFc(fc1);


//каррирование функций
function mult(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}


console.log('curring result')
console.log(mult(2)(3)(4)); // 3


//меморизацию функции

const mul5 = (a) => a * 5;

// аналогичная функция с мемоизацией
const memoized = () => {
    let cache = {};
    return (n) => {
        if (cache[n]) {
            return cache[n];
        } else {
            cache[n] = mul5(n);
            return cache[n];
        }
    }
}

const memoInstance = memoized();
console.log(memoInstance(6)); // 30
console.log(memoInstance(6)); // 30 from cache


//сделайте ленивое вычисление функции
const a = (n) => n * 255
const b = (n) => n / 255

function c(n) {
    // вычисляются один раз 
    const aValue = a(n);
    const bValue = b(n);
    c = function() {
        // далее с подменяется этой фукнцией
        return aValue + bValue;
    };
    return c.apply(this, arguments);
}


//монаду

let indexURLs = {
    'en': 'http://mysite.com/en', //English
    'sp': 'http://mysite.com/sp', //Spanish
    'jp': 'http://mysite.com/jp' //Japanese
}


const { path, curry } = require('ramda');
const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
    return Maybe(user) //обёртываем пользователя в объект Maybe
        .map(path(['prefs', 'languages', 'primary'])) //используем Ramda для получения primary
}


const getUrl = curry(function(allUrls, language) { //curry преобразует это в функцию с одним аргументом
    return Maybe(allUrls[language]);
});

const maybeGetUrl = getUrl(indexURLs) //Хранит в функции curried глобальное значение.


let joeUser = {
    name: 'joe',
    email: 'joe@example.com',
    prefs: {
        languages: {
            primary: 'sp',
            secondary: 'en'
        }
    }
};

// console.log(getURLForUser(joeUser).chain(getUrl).chain.chain)


//бесконечную структуру данных,
//лямбда выражение
const sum = (x, y) => x + y;

//операции Map, Filter и Reduce.
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 1));
console.log(arr.filter(item => item % 2));
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue), 0)