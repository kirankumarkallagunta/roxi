const https = require("https");
//Note:if you want specific test case then remove comments"/*.....*/""
//or if you want only one test case then comment another one
//use command node index.js

//1

/*https
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
  });*/

//2

/*https
  .get("https://jsonplaceholder.typicode.com/users/11", (resp) => {
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
*/
