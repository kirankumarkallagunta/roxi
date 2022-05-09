const https = require("https");
//testCase 1
//node testCase1.js

https
  .get("https://jsonplaceholder.typicode.com/todos", (resp) => {
    let data = "";
    let list = [];

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      let todoId = JSON.parse(data);
      todoId.map((eachItem) => {
        let id = eachItem.id;
        let title = eachItem.title;
        let completed = eachItem.completed;
        let a = { id, title, completed };
        list.push(a);
      });
      console.log(list);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
