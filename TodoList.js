const https = require("https");

_EXTERNAL_URL = "https://jsonplaceholder.typicode.com/todos";

const testCase1 = (callback) => {
  https
    .get(_EXTERNAL_URL, (resp) => {
      let data = "";
      let list = [];

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        let todoId = JSON.parse(data);
        todoId.forEach(function (element) {
          let id = element.id;
          let title = element.title;
          let completed = element.completed;
          let a = { id, title, completed };
          list.push(a);
        });
        console.log(list);
        const req = JSON.stringify(list);
        return callback(req);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports.callApi = testCase1;
