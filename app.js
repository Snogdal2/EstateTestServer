const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const data = require("./sample4.json");
const bodyParser = require("body-parser")
const { writeFile } = require("fs");
const path = "./sample4.json";

app.use(cors());

app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", (req, res) => {
  res.send(data);
});

// app.post("/", function(req, res) {
//   var num1 = Number(req.body.num1);
//   var num2 = Number(req.body.num2);
    
//   var result = num1 + num2 ;
    
//   res.send("Addition - " + result);
// });

app.post("/", (req, res) => {
  const purchase_hist = {
    jens :[{
     firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
  number: req.body.number
  }]
  };
  writeFile(path, JSON.stringify(purchase_hist, null, 2), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to the file");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
