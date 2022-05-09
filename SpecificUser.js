const https = require("https");

URL = "https://jsonplaceholder.typicode.com/users/2"; //you can change user id(number)  here
URL2 = "https://jsonplaceholder.typicode.com/todos";

const testCase2 = (callback) => {
  https
    .get(URL, (resp) => {
      let data = "";
      let object = {};

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        let todoId = JSON.parse(data);
        object.id = todoId.id;
        object.name = todoId.name;
        object.email = todoId.email;
        object.phone = todoId.phone;
        https
          .get(URL2, (resp) => {
            let data = "";
            let list = [];

            resp.on("data", (chunk) => {
              data += chunk;
            });

            resp.on("end", () => {
              let todoId = JSON.parse(data);

              todoId.forEach(function (element) {
                if (object.id === element.userId) {
                  let id = element.id;
                  let title = element.title;
                  let userId = element.userId;
                  let completed = element.completed;
                  let a = { id, title, userId, completed };
                  list.push(a);
                }
              });
              //console.log(list);
              object.todos = list;
              console.log(object);
              requiredObject = JSON.stringify(object);
              return callback(requiredObject);
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
};

module.exports.callApi = testCase2;
