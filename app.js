//some nested conditional practice

// let password = "supercoder12";
// if (password.length >= 12) {
//     if (password.indexOf(' ') !== -1){
//         console.log("password cannot include spaces");
//     }
//     else {
//         console.log("valid password")
//     }
// }
//     else {
//         console.log("Invalid password");
//     }



//using && operator 
// let password = "ThatGuy10";
// if (password.length >= 9 && password.indexOf(' ') === -1) {
//     console.log("Valid Password");
// }
// else {
//     console.log("Invalid Password");
// }


// let player1 = 'online'
// let color;
// if (player1 === 'online') {
//     color = 'green';
// }
// else {
//     color = 'red';
// }


//nested loops practice
let myNums = [
    [2, 4, 6],
    [1, 5, 6],
    [3, 4, 8]
];

// for (let i = 0; i < myNums.length; i++) {
//     console.log(myNums[i]);
//     let row = myNums[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

let totalScore = 0;
for (let i = 0; i < myNums.length; i++) {
    let row = myNums[i];
    for (let j = 0; j < row.length; j++) {
        totalScore += row[j];
    }
}

// loops + arrays
const guitars = [ 'Jackson', 'Gibson', 'Fender', 'Ibanez', 'PRS' ];

for (let i = 0; i < guitars.length; i++) {
    console.log(i, guitars[i]);
}


const bikes = [ 'GT', 'Trek', 'Cannondale', 'Bianchi', 'Specialized' ];
for (let i = 0; i <= bikes.length; i++) {
    console.log('outer:', i);
    for (let j = 0; j < bikes.length; j++) {
        console.log('inner:', j);
    }
}

// const teamScores = [ 90, 88, 74, 100, 62, 41 ];

// for (let i = 0; i < teamScores.length; i++) {
//     console.log(i, teamScores[i]);
// }

const myTeams = [
    {
        teamName    : 'Manchester United',
        score       : 15
    },
    {
        teamName    : 'Manchester City',
        score       : 90
    },
    {
        teamName    : 'Chelsea',
        score       : 40
    },
    {
        teamName    : 'Arsenal',
        score       : 80
    },
    {
        teamName    : 'Tottenham Hotspur',
        score       : 20
    }
];

for (let i = 0; i < myTeams.length; i++) {
    let teams = myTeams[i];
    console.log(`${teams.teamName} scored ${teams.score}`);
}



//More Practice
//function scope

let movie = 'Saw';

function watchMovie() {
    let movie = 'BladeRunner';
    movie;
}
watchMovie();
movie;



// let playerScore = 12000;
// let scoreCounter = 10000;

// if (playerScore >= scoreCounter) {
//     console.log(`Nice!! You beat the previous score of ${scoreCounter}!!`);
// }
// else {
//     console.log("Try Again!");
// }

//while loop

const scoreCounter = Math.floor(Math.random() * 20);
let playerScore = Math.floor(Math.random() * 20);
while (playerScore !== scoreCounter) {
    console.log(playerScore);
    playerScore = Math.floor(Math.random() * 20);
}
console.log(`ScoreCounter: ${scoreCounter} PlayerScore: ${playerScore}`);


const leagueRatings = {
    ManCity      : 95,
    ManUtd       : 75,
    Arsenal      : 87,
    Chelsea      : 80,
    Spurs        : 79,
    Liverpool    : 90 
};
let prem = leagueRatings;
for(prem of Object.keys(leagueRatings)) {
    let score = leagueRatings[prem];
    console.log(`I rated ${prem} ${score} / 100`);
}


// function multiply(x, y) {
//     console.log(x * y);
// }

// Return function

function add(x, y) {
    return x + y;
}
const sum = add(30, 40);
sum;


