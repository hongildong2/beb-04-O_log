const OLOG_ERC20 = artifacts.require("OLOG_ERC20");
const OLOG_ERC721 = artifacts.require("OLOG_ERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
<<<<<<< HEAD
  deployer.deploy(ProjectERC20, {
    from: "0x0A1670F9c22EF051734a9Ac140E9fA19F2eCb010",
  });
  deployer.deploy(ProjectERC721, {
    from: "0x0A1670F9c22EF051734a9Ac140E9fA19F2eCb010",
=======
  deployer.deploy(OLOG_ERC20, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
  });
  deployer.deploy(OLOG_ERC721, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
>>>>>>> d4070e2c830b80afb2aa9ea108a381935f1603e1
  });
  //불러온 컨트랙트 디플로이
};
