const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("<p>Hello</p>");
});

app.get("/properties", (req, res) => {
    var properties = new Array();
    properties.push({
        id: 1,
        name: "one",
        location: "Lisbon"
    });
    res.json(properties);
});

app.listen(3000, (err) => {
if (err) {
    console.log("Oops, error");
    return;
}

    console.log("Server listening port 3000");
});

console.log("This app runs! Yay!");