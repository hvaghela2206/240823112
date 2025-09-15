const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require ("./route/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
    "mongodb+srv://heenavaghela978_db_user:H7753034@heena.yz1n1wq.mongodb.net/song",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use("/song",studentRoute);

app.listen(PORT,()=>{
    console.log("server is runinig: 127.0.0.1"+PORT);
});