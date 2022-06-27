const ProjectERC20 = artifacts.require("ProjectERC20");
const ProjectERC721 = artifacts.require("ProjectERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(ProjectERC20, {
    from: "0x0A1670F9c22EF051734a9Ac140E9fA19F2eCb010",
  });
  deployer.deploy(ProjectERC721, {
    from: "0x0A1670F9c22EF051734a9Ac140E9fA19F2eCb010",
  });
  //불러온 컨트랙트 디플로이
};
