// const fs = require ("fs"); 
import fs from 'node:fs';
// fs.writeFile("hv.txt","heelo",(err)=>{
//     if (err)throw err;
//     console.log("file has been saved!!");
// });

fs.readFile("hv.txt","utf8",(err,data)=>{
    if (err)throw err;
    console.log("file content:",data);
});
