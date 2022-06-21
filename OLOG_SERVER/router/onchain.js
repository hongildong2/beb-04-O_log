//수도코드입니다
const { OnchainFunctions } = require("../controller/onchain/ERC20controller");
const express = require("express");
const router = express.Router();

router.post("/", OnchainFunctions);

module.export = router;
