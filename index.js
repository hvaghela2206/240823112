const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://heenavaghela978_db_user:H7753034@heena.yz1n1wq.mongodb.net/students",{
    // userNewUrlParser:true,
    // useUnifiedTopology:true,
})

const studentSchema = new mongoose.Schema({
    name:String,
    department:String,

})

const Student = mongoose.model("student",studentSchema)

console.log("mongodb connected successfuly")

const student = new Student({
    name:"jeel",
    department:"computer"
})

student.save().then(()=>{console.log("student saved succesfully")}).catch((error)=>{console.log("error",error)})