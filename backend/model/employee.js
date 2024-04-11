// Name,Designation,Location:Salary:



const mongoose=require('mongoose');
const schema=mongoose.Schema({

name:String,
designation:String,
location:String,
salary:String
})

const employeedetailsmodel=mongoose.model('employee',schema);

module.exports=employeedetailsmodel;