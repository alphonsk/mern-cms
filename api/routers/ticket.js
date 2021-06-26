const express = require("express");
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json("ticktet API says hello")
});

module.exports = router;
