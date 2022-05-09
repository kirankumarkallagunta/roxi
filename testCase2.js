const https = require("https");
//testCase 2
//enter your user id "https://jsonplaceholder.typicode.com/users/<user_id>""
//node testCase2.js
https
  .get("https://jsonplaceholder.typicode.com/users/10", (resp) => {
    let data = "";
    let object = {};
    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      let todoId = JSON.parse(data);
      //console.log(todoId);
      object.id = todoId.id;
      object.name = todoId.name;
      object.email = todoId.email;
      object.phone = todoId.phone;
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
              if (object.id === eachItem.userId) {
                let id = eachItem.id;
                let title = eachItem.title;
                let userId = eachItem.userId;
                let completed = eachItem.completed;
                let a = { id, title, userId, completed };
                list.push(a);
              }
            });
            //console.log(list);
            object.todos = list;
            console.log(object);
          });
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
        });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
