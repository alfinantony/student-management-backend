//here we create server using express

//1 : Import Express
const express =require('express');


//4: import cores for [ for connecting the backend and frontend]
const cors = require('cors');

// 9 : Import logic.js
 const logic = require('./services/logic')

//2: create server using Express 
const server =express()

//5: using core in server app
server.use(cors({
    origin:'http://localhost:4200'
}))

//6: To  phrase json data to js in server app
server.use(express.json())

//3: setup port server app 
server.listen(5000,()=>{
    console.log('Server listing on port 5000');
})

//7: To resolve client request in server [ this we used for testing in local host with nodemon index js also in postman]
//  server.get('/',(req,res)=>{
//     res.send('get')
//  })



// 8: Register -using post in postman

    server.post('/studentdetails',(req,res)=>{
        console.log("Inside studentdetails API");
        console.log(req.body);

        //logic for register

        logic.studentdetails(req.body.name,req.body.address,req.body.email,req.body.phone,req.body.district,req.body.english,req.body.maths,req.body.science,req.body.social,req.body.hindi,req.body.totalMarks,req.body.averageMarks).then((result)=>{
            res.status(result.statusCode).json(result)
        })
        // res.send("Student details request received")
    })

    
// Retrieve all student details
// server.get('/studentdetails', async (req, res) => {
//     try {
//         const studentDetails = await logic.getStudentDetails();
//         res.status(200).json(studentDetails);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message : 'Internal Server Error' });
//     }
// });


