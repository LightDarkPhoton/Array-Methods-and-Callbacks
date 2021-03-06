import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


// (a)

const finalTeams2014 = fifaData.filter(function(item) {
    return item["Year"] === 2014 && item["Stage"] == "Final";
})

console.log(finalTeams2014[0]["Home Team Name"]);

// (b)

console.log(finalTeams2014[0]["Away Team Name"]);

// (c)

console.log(finalTeams2014[0]["Home Team Goals"]);

// (d)

console.log(finalTeams2014[0]["Away Team Goals"]);

// (e)

function findHighestScore(array) {

    if (array[0]["Home Team Goals"] > array[0]["Away Team Goals"]) {
        return `${array[0]["Home Team Name"]} wins`
    } else {
        return `${array[0]["Away Team Name"]} wins`
    }
}

console.log(findHighestScore(finalTeams2014));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsData = data.filter(function(item) {
        return item["Stage"] === "Final";
    })

    return finalsData;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsFunction) {

    const finalsArray = getFinalsFunction(fifaData);
    
    const years = finalsArray.map(function(item) {
        return item["Year"];
    })

    return years;

};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsFunction) {

    const finalsArray = getFinalsFunction(fifaData);


    let winners = [];
    finalsArray.forEach(function(item) {

        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return winners.push(item["Home Team Name"]);
        } else {
            return winners.push(item["Away Team Name"]);
        }
    })

    return winners
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersFunction, getYearsFunction) {

    const winnersArray = getWinnersFunction(getFinals);
    const yearsArray = getYearsFunction(getFinals);

    let index = 0;
    let winnersAndYearsStringArray = [];

    winnersArray.forEach(function(item) {
        index = index + 1;
        return winnersAndYearsStringArray.push(`In ${yearsArray[index - 1]}, ${item} won the world cup!`);
    })

    return winnersAndYearsStringArray;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const sum = data.reduce(function(accumulator, item) {
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
    },0)

    return sum / data.length;

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
