const Parse = require("parse/node");
const routes = require("./routes/routes.js");

const express = require("express");
const app = express();

// Initialize Parse with your application ID and server URL
Parse.initialize("myAppId");
Parse.serverURL = "http://localhost:1337/parse";

app.use("/api", routes);

app.get("/salam", (req, res) => {
  res.send("As-salamu alaykum World!");
});

// Create a new class named "TestObject"
// const TestObject = Parse.Object.extend("TestObject");

// // Create a new instance of that class
// const testObject = new TestObject();

// // Set a value for a key named "foo"
// testObject.set("foo", "bar");

// // Save the object to Parse Server
// testObject
//   .save()
//   .then((object) => {
//     console.log("Parse Object saved successfully with objectId:", object.id);
//   })
//   .catch((error) => {
//     console.error("Error saving Parse Object:", error);
//   });

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
