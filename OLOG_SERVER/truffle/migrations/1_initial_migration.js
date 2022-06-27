const OLOG_ERC20 = artifacts.require("OLOG_ERC20");
const OLOG_ERC721 = artifacts.require("OLOG_ERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(OLOG_ERC20, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
  });
  deployer.deploy(OLOG_ERC721, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
  });
  //불러온 컨트랙트 디플로이
};
