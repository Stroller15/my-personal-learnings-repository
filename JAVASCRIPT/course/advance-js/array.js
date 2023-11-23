// Array and loops
// one array can contain diff type of data types

// const languages = ['js' , 'c' , 'py'];
// console.log(languages);

// console.log(languages.length)

// const actors = [
//     {
//         name: 'Actor1',
//         payment: 100
//     },

//     {
//         name: 'Actor2',
//         payment: 100
//     },
//     {
//         name: 'Actor3',
//         payment: 100
//     },

// ];

// ! Simple for loop

// for(let i = 0 ; i < actors.length ; i++) {
//     actors[i].payment -= 10;
//     console.log(actors[i])
// }

// !  foreach loop

// actors.forEach((actor) => {
//     console.log(actor);
// })

// ! let of loop
// for(let actor of actors) {
//     console.log(actor);
// }

// !  fileter

// const failed = students.filter((student) => {
// if(student.marks < 35) return false;
// else return true;

//     return student.marks < 35;
// })

// console.log(failed);

// // !   Map

// const users = [
//     {
//         name: 'John',
//         title: 'Doe'
//     },
//     {
//         name: 'Shubh',
//         title: 'Verma'
//     },
//     {
//         name: 'Jack',
//         title: 'ma'
//     },
// ]

// const finalUsers = users.map((user)=> {
//     return {
//        fullname: `${user.name} ${user.title}`
//     }
// })

// console.log(finalUsers);

// ! Reduce

// const movies = [
//   {
//     name: "Interstellar",
//     budget: 100,
//   },
//   {
//     name: "Social",
//     budget: 150,
//   },
//   {
//     name: "Matrix",
//     budget: 300,
//   },
// ];

// let total = 0;

// movies.forEach((movie) => {
//     total += movie.budget;
// })

// const total = movies.reduce((acc, movie) => {
//   acc += movie.budget;
//   return acc;
// }, 0);

// console.log(total);


//! Indexof

// const admins = [2, 1, 3];

// const user = {
//     name: 'xyz',
//     id: 1
// }

// console.log(admins.indexOf(user.id));
// console.log(admins.includes(user.id))


// ! Find

const users = [
    {
        name: 'xyz',
        id: 1
    },
    {
        name: 'abc',
        id: 2
    },
    {
        name: 'pqr',
        id: 3
    },
];

const myUser = users.find((user) => {
    return user.id === 3;
})

console.log(myUser);