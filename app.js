const apiCallFromSpecificUser = require("./SpecificUser");
const apiCallFromTodo = require("./TodoList");

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/user") {
      apiCallFromSpecificUser.callApi(function (response) {
        res.write(response);
        res.end();
      });
    } else if (req.url === "/todo") {
      apiCallFromTodo.callApi(function (response) {
        res.write(response);
        res.end();
      });
    }

    // res.end();
  })
  .listen(5000);

console.log("service running on 5000 port....");
