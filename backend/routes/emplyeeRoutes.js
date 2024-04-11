const express=require('express');
const router=express.Router();
const employeedetails=require('../model/employee');



router.use(express.json());
// for creting new employee--- employee form 

router.post('/empform',async(req,res)=>{

    try {
       const data=req.body;
       const newEmployee=await employeedetails(data).save();
       console.log(newEmployee);
       if(newEmployee)
       {
       
       res.status(200).send({Message:'New employee Added successfully'})
    }

    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
    }
)


// Display employee details in Home page

router.get('/home',(req,res)=>{

    try {
        employeedetails.find().then((empdetails)=>{
            res.status(200).send(empdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display employee details"}) 
    }
})


router.delete('/delete/:id',async(req,res)=>{

try {
let id=req.params.id;
console.log(id);
const deletedemp=await employeedetails.findByIdAndDelete(id);
console.log(deletedemp);
if(!deletedemp){
    return res.status(404).json({error:`no data found`});
   
}
res.status(200).send({Message:"employee deleted Successfully"})

} catch (error) {
    res.status(400).json({ error: 'Bad Request' });
}
})




router.put('/update/:id',async(req,res)=>{
    try {
        let id=req.params.id;
        const updatedemployee= await employeedetails.findByIdAndUpdate(id, req.body);
        console.log(updatedemployee);
        if(!updatedemployee)
        {
            console.log("no employee found");
           return res.status(404).json({error:`no data found`});
        }
        res.status(204).send({Message:`data updated `});
    } catch (error) 
    {
        res.status(400).json({ error: 'Bad Request' });
    }
})


module.exports=router;