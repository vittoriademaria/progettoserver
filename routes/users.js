var express = require('express');
var router = express.Router();
const axios = require("axios");

async function loadUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function loadUserById(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
router.get("/", async function (req, res, next) {
  const users = await loadUsers();
  res.render("userLayout", { title: "Users", users, dynamicPartial: () => "users" });
});



module.exports = router;
