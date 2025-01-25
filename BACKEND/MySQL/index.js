// to start sql in terminal use ---
// cd "C:\Program Files\MySQL\MySQL Server 8.0"  
// & .\bin\mysql.exe -h localhost -u root -p


const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
const port =3030;
const path=require("path");
const methodOverride =require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));



let createRandomUser=()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
};
  //  inserting new data
//   let q="insert into crseven (id,username,email,password) values ?;";
//   let data=[];
// for(let i=1;i<=100;i++){
//   // console.log(createRandomUser());
//    data.push(createRandomUser());//100 fake users
//  }
 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'A02494468'
  });

//Home route
  app.get("/",(req,res)=>{
    let q="Select count(*) from user";
    try{
  connection.query(q,(err,result)=>{
      if(err) throw err;
      let count=result[0][ "count(*)"];
      res.render("home.ejs",{count});
      // res.sendStatus(result[0][ "count(*)"])
   });
}catch(err){
   console.log(err);
   res.send("Some error in database")
 }
  });
//Show route
app.get("/user",(req,res)=>{
  let q="Select * from user";
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let users=result;
        res.render("user.ejs",{users});
        // res.sendStatus(result[0][ "count(*)"])
     });
  }catch(err){
     console.log(err);
     res.send("Some error in database")
   }
})
//EDIT route
app.get("/user/:id/edit",(req,res)=>{
  let { id } =req.params;
  let q=`Select * from user where id="${id}"`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user=result[0];
        res.render("edit.ejs",{user});
        // res.sendStatus(result[0][ "count(*)"])
     });
  }catch(err){
     console.log(err);
     res.send("Some error in database")
   }
});
//UPDATE (DB) route
app.patch("/user/:id",(req,res)=>{
  let { id } =req.params;
  let {password: formpass,username: newUsername}=req.body;
  let q=`Select * from user where id="${id}"`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user=result[0];
        if(formpass != user.password){
          res.send("Wrong");
        }
        else{
          let q2=`update user set username="${newUsername}" where id="${id}"`;
          connection.query(q2,(err,result)=>{
            if(err) throw err;
            res.redirect("/user")

          })
        }
        
        // res.sendStatus(result[0][ "count(*)"])
     });
  }catch(err){
     console.log(err);
     res.send("Some error in database")
   }
})
  app.listen(port,()=>{
    console.log("Server is listening ");
  });

  
  // console.log(createRandomUser());
  // try{
  //   connection.query(q,[data],(err,result)=>{
  //       if(err) throw err;
  //       console.log(result);
  //       console.log(result.length);
  //    });
  // }catch(err){
  //    console.log(err);
  //  }
  // connection.end();