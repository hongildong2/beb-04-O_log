const ProjectERC20 = artifacts.require("ProjectERC20");
const ProjectERC721 = artifacts.require("ProjectERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(ProjectERC20, {
    from: "0x1e372D620b22cc1Ea46f0932622C71A793D0D6cf",
  });
  deployer.deploy(ProjectERC721, {
    from: "0x1e372D620b22cc1Ea46f0932622C71A793D0D6cf",
  });
  //불러온 컨트랙트 디플로이
};
