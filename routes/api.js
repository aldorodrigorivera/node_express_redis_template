const { Router } = require("express");
const { isMe, github } = require("../controller/api");
const { isAuth } = require("../middleware/auth");

const router = Router();


router.get("/me", [isAuth], isMe);
router.get("/github/:username", [isAuth], github);

module.exports = router;