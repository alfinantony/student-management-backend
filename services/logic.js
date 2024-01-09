//import db.js
    const { response } = require('express');
const db = require('./db')


const studentdetails=(name,address,email,phone,district)=>{
        console.log('Inside the studentdetails function');

        // To check name in mongodb
        return db.studentdetails.findOne({ name }).then((response) => {            
            console.log(response);

            if(response){
                return{
                    statusCode: 401,
                    message:"student details already registered"
                }
            }
            else{

                //if the student details is not there in mongodb then we need to register the details
                const newstudentdetails = new db.studentdetails({
                    name, address, email, phone, district
                });
                // to store new student details in mongodb
                newstudentdetails.save();

                // here we need to send response as studentdetails success to client
                     return{
                        statusCode:200,
                        message:"Student details registered successfully"
                     }
            }
        })
}

module.exports={
    studentdetails
}

