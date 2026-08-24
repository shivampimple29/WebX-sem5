const app = angular.module("myApp", []);

app.controller("MainController", function () {

    this.title = "Hello World";

    this.message = "My first angular project";

    this.userName = "";

    this.alias = {
        name: "Benjamin Pointdexter",
        villain: "Bullseye"
    };

    this.price = 50000;

    // This is a generic message.
});