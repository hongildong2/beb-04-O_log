const ProjectERC20 = artifacts.require("ProjectERC20");
const ProjectERC721 = artifacts.require("ProjectERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(ProjectERC20, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
  });
  deployer.deploy(ProjectERC721, {
    from: "0xA00810e89688bE9bb0BfA31a339D9f48F73b2B07",
  });
  //불러온 컨트랙트 디플로이
};
