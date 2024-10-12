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

