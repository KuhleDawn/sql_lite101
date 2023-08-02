//import * as sqlite from 'sqlite';
//import sqlite3 from 'sqlite3';
import express from 'express';
import { addGreeting, getGreetings,deleteGreeting, updateGreeting } from './db.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3008;

//http://localhost:3008/api/greetings

//get all the greetings
app.get('/api/greetings', async (req, res) => {
    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings
    })
});

// create a route to add a greeting
//?
app.post('/api/greeting', async (req, res) => {
    const greeting = req.body.greeting;
    const language = req.body.language;

    await addGreeting(language, greeting)
    //
    req.json({
            status : 'success',
            language : `Added a greeting for ${language}.`

    });


});

//const PORT = process.env.PORT || 3008;
app.listen(PORT, () => `started on port : ${PORT}`)




// console.log('start')

// const db = await sqlite.open({
//     filename: './101.db',
//     driver: sqlite3.Database
// });

// //call the query using await
// async function getGreetings () {
// const result = await db.all(`select * from greetings`);
// return result;
// }





// // crete a functin that deletes a specific greeting
// async function deleteGreeting (language, greeting){
//     const sql = `insert into greetings (language, greeting = $1`
//     await db.run(sql, [language, greeting])
// }



// //crete a function that adds a new greeting
// async function addGreeting(language, greeting){
//     // sql statement type -  insert
//     const sql = `insert into greetings (language, greeting) values (?, ?)`
//     await db.run(sql, [language, greeting]);
// }

// const result1 = await getGreetings()
// console.log(result1);

// console.log('===========')

// //Update the values in a table
// async function updateGreetin(language, greeting, id) {
//     const sql = `update greetings set language = ?, greeting = ? where id = ?`;
//     await db.run (sql, [language, greeting, id])

// }
// await updateGreeting('Sepedi', 'Thobela',4 )

// await addGreeting('Sepedi', 'Dumela');
// console.log('=============')

// const result2 = await getGreetings()
// console.log(result2)









//call the query using promise 
//db
    //.all(`select * from greeting`)
    //.then(result => {
       // console.log(result)
    //})
 
    //const countResult = await db.get(`select count(*) as count from greetings`);
    //console.log(countResult.count)

   // console.log('end')