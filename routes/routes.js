// ./routes/routes.js
const express = require("express");
const router = express.Router();
const Parse = require("parse/node");

// Parse.initialize("myAppId");
// Parse.serverURL = "http://localhost:1337/parse";

const TestObject = Parse.Object.extend("TestObject");

// Get all TestObjects
router.get("/testObjects", async (req, res) => {
  const query = new Parse.Query(TestObject);
  try {
    const results = await query.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Error fetching TestObjects" });
  }
});

module.exports = router;
