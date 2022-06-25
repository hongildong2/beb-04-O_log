//수도코드입니다.

const { ethFaucet } = require("../../controller/onchain/faucet");
const { balance } = require("../../controller/onchain/serverAccount");
const { walletSync } = require("../../controller/onchain/ERC20controller");
const express = require("express");
const router = express.Router();

router.route("/ethFaucet").get(ethFaucet); //서버계정에 1이더씩 던져줌 ***테스트용입니다!!
router.route("/balance").get(balance); //서버계정의 잔고 조회 ***테스트용입니다!!
router.route("/walletSync").post(walletSync); //지갑 동기화

module.exports = router;
