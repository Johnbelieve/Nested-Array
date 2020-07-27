//NUMBER 1
var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}

//A. Console.logging all primeNumber
var prime = nestedData.innerData.numberData.primeNumbers;
for (var i = 0; i < prime.length; i++) {
    console.log(prime[i]);
}

//B. Console.logging all fibonacci
var bonacci = nestedData.innerData.numberData.fibonnaci;
for (var i = 0; i < bonacci.length; i++) {
    console.log(bonacci[i]);
}

//C. console.logging the second value in the order array
var seconValue = nestedData.innerData.order;
console.log(seconValue[1]);

//D.
console.log(nestedData.innerData.addSnack("Chocolate"));

//E.


//NUMBER 2
var nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

//A.
function addSpeaker(value) {
    var newSpeaker = nestedObject.speakers;
    newSpeaker.push({
        name: value
    })
    return newSpeaker;
}
console.log(addSpeaker("john"));

//B. Adding new language to the nestedObject functions and writing hello in that language
function addLanguages(name, value) {
    var mainLangauges = nestedObject.data.languages;
    mainLangauges[name] = {
        hello: value
    }
    return mainLangauges;
}
console.log(addLanguages("yoruba", "bawoni"));

//C. Adding a new country to the existing country
function addCountry(newCountry, countryCapital, countryPopulation) {
    var newCountryToAdd = nestedObject.data.continents.europe.countries;
    newCountryToAdd[newCountry] = {
        capital: countryCapital,
        population: countryPopulation
    };
    return newCountryToAdd;
}
console.log(addCountry("Germany", "Berlin", 89888299));

//NUMBER 3
function rotate(arr, num) {
    var newArray = num % arr.length;
    for (var i = 0; i < newArray; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([1, 2, 3], 2));